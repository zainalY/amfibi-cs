$(document).ready(function () {
    $.getJSON("/data/data_voucher.json", function (data) {
        var itemCards = "";

        // Looping data load by src /data/data_voucher.json
        $.each(data.voucher, function (index, voucher) {
            // Html for card view data
            itemCards += `
                <div class="col-lg-4 col-sm-12 col-md-12">
                    <div class="card shadow-2xl border-0 mt-4">
                        <div class="card-body">
                            <span class="badge text-bg-danger notif mb__8">Terlaris</span>
                            <div class="type pb__8">Yang Bikin Mantul</div>
                            <div class="data">${voucher.data}<div class="vr vr-cs text-primary align-middle me-2 ms-3"
                                    style="height: 12px !important;"></div>
                                <span>${voucher.limit}</span>
                            </div>
                            <div class="price">${currency} ${voucher.total}</div>
                            <div class="d-flex align-items-center feature-item">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 13L10 18L19 7" stroke="#016BD9" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                <div class="feature">Kuota utuh <span>${voucher.limit}</span></div>
                            </div>
                            <div class="d-flex align-items-center feature-item">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 13L10 18L19 7" stroke="#016BD9" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                <div class="feature">Untuk penggunaan <span> ${voucher.devices} perangkat</span></div>
                            </div>
                            <div class="d-flex align-items-center feature-item mb-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 13L10 18L19 7" stroke="#016BD9" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                <div class="feature">Mendukung untuk <span>Semua aplikasi </span></div>
                            </div>
                            <a href="#" class=" btn btn-primary d-block w-100 btn-md" target="_blank" data-bs-toggle="modal" data-bs-target="#voucherDetailsModal" onclick="showVoucherDetails(${voucher.id})">Beli Sekarang!</a>
                        </div>
                    </div>
                </div>
            `;
        });

        $("#itemCards").html(itemCards);
    });

    $("#orderForm").on("submit", function (event) {
        event.preventDefault();
        if (validateForm()) {
            var voucherId = parseInt($("#voucherId").val(), 10);
            submitOrder(voucherId);
        }
    });
});

// Show detail data by id
function showVoucherDetails(voucherId) {
    $.getJSON("/data/data_voucher.json", function (data) {
        var voucher = data.voucher.find(function (item) {
            return item.id === voucherId;
        });

        $(".voucherLimit").text(voucher.limit);
        $("#voucherDevices").text(voucher.devices);
        $("#voucherData").text(voucher.data);
        $("#voucherPrice").text(currency + voucher.total);
        $("#voucherId").val(voucherId);
        $("#voucherDetailsModal").modal("show");
    });
}

// Submit input order to Telegram
var telegramUsername = "designwitharifin"; // Ganti dengan username Telegram yang dituju

function submitOrder(voucherId) {
    var user = $("#orderUser").val();
    var payment = $("#paymentMethod option:selected").val(); // Get the selected value from the <select> element

    $.getJSON("/data/data_voucher.json", function (data) {
        // Find the voucher based on voucherId
        var voucher = data.voucher.find(function (item) {
            return item.id === voucherId;
        });

        if (user !== "") {
            /* Final Telegram URL */
            var telegramUrl = "https://t.me/";
            var username = telegramUsername;
            var header = voucherHeader;
            var telegramUser = "**User**: " + user;
            var telegramData = "**Voucher**: " + voucher.data;
            var telegramLimit = "**Limit**: " + voucher.limit;
            var telegramPrice = "**Price**:" + currency + voucher.total;
            var telegramPay = "**Payment method**: " + payment;

            /* Construct Telegram URL */
            var blanter_telegram = telegramUrl + username + "?text=" + encodeURIComponent(header + "\n\n" + telegramUser + "\n" + telegramData + "\n" + telegramLimit + "\n" + telegramPrice + "\n" + telegramPay);

            /* Open Telegram window */
            window.open(blanter_telegram, "_blank");

            /* If success redirect to success page*/
            setTimeout(function () {
                window.location.href = "transaction-success.html";
            }, 1000); // Change the delay time as desired
        } else {
            setTimeout(function () {
                window.location.href = "voucher.html";
            }, 1000); // Change the delay time as desired
        }
    });
}




// Form input validate
function validateForm() {
    var user = $("#orderUser").val().trim();
    var payment = $("#paymentMethod option:selected").val(); // Get the selected value from the <select> element

    if (user === "") {
        alert("Please enter your name.");
        return false;
    }

    if (payment === "") { // Check if no payment method is selected
        alert("Please select a payment method.");
        return false;
    }

    return true;
}



