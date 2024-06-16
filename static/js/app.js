// ---------------------------------------------------------------------------------------------
/* USER AREA!
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Attention: Please note the symbols in this code: 🔧
* ❌ = This code should not be changed.
* ⚠️ = Dangerous areas, it is recommended that you do not change the region code if you do not 
        understand it.
*-----------------------------------------------------------------------------------------------


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Note: Please read and config before start
* Logo settings 🔧 
*-----------------------------------------------------------------------------------------------
* Please changes with your logo
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

var newFavicon = "favicon.svg";
var newThemeColor = "#0B63E5";
var logoColor = "static/img/brand/brand-header.svg";
var logoWhite = "static/img/brand/brand-header-light.svg";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Note: Please read and config before start
* WhatsApp config here 🔧 
*-----------------------------------------------------------------------------------------------
* Please changes with your data like :
* -> whatsAppNumber(Required)
* -> voucherHeder(Optional)
* -> listrikHeader(Optional)
* -> pulsaHeader(Optional)
* -> pdamHeader(Optional)
* -> introWa(Optional) in menu chat -> Text intro in chat menu
* -> noteUserOrder(Optional) -> This is view in detail product like detail voucher etc.
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

var whatsAppNumber = "";
var voucherHeader = "ORDER: **Voucher**";

var introWa = "Halo kak";
var noteUserOrder = `Please complete your order form,
make a payment first, if so please submit your order and send proof
of payment on the WIFI owner's whatsApp. `;

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Note: Please read and config before start
* Currency config here, please select which one.
* according to your country. you just copy your currency symbol into the var field.
* var currency = "REPLACE_WITH_YOUR_CYRRENCY";  🔧 
*-----------------------------------------------------------------------------------------------
* Please change to your country's currency, select a currency with the same symbol as your 
* country if your country's time zone does not support it.
*
* Currency Symbols
*----------------------
* Symbol meaning :
*  ⚠️ = Unvalidated
*  ❌ = Not Support
*  ✔️ = Support
*
* ar-SA (Arabic - Saudi Arabia): ﷼ (SAR)⚠️
* bn-BD (Bangla - Bangladesh): ৳ (BDT)❌
* bn-IN (Bangla - India): ₹ (INR)⚠️
* cs-CZ (Czech - Czech Republic): Kč (CZK)⚠️
* da-DK (Danish - Denmark): kr (DKK) ✔️
* de-AT (Austrian German): € (EUR)⚠️
* de-CH (Swiss German): CHF (CHF)⚠️
* de-DE (Standard German - Germany): € (EUR)✔️
* el-GR (Modern Greek): € (EUR)✔️
* en-AU (Australian English): $ (AUD)✔️
* en-CA (Canadian English): $ (CAD)✔️
* en-GB (British English): £ (GBP)✔️
* en-IE (Irish English): € (EUR)✔️
* en-IN (Indian English): ₹ (INR)✔️
* en-NZ (New Zealand English): $ (NZD)✔️
* en-US (US English): $ (USD)✔️
* en-ZA (English - South Africa): R (ZAR)❌
* es-AR (Argentine Spanish): $ (ARS)✔️
* es-CL (Chilean Spanish): $ (CLP)✔️
* es-CO (Colombian Spanish): $ (COP)✔️
* es-ES (Castilian Spanish - Spain): € (EUR)✔️
* es-MX (Mexican Spanish): $ (MXN)✔️
* es-US (American Spanish): $ (USD)✔️
* fi-FI (Finnish - Finland): € (EUR)❌
* fr-BE (Belgian French): € (EUR)❌
* fr-CA (Canadian French): $ (CAD)❌
* fr-CH (Swiss French): CHF (CHF)❌
* fr-FR (Standard French - France): € (EUR)❌
* he-IL (Hebrew - Israel): ₪ (ILS)✔️
* hi-IN (Hindi - India): ₹ (INR)✔️
* hu-HU (Hungarian - Hungary): Ft (HUF)❌
* id-ID (Indonesian - Indonesia): Rp (IDR)✔️
* it-CH (Swiss Italian): CHF (CHF)❌
* it-IT (Standard Italian - Italy): € (EUR)✔️
* ja-JP (Japanese - Japan): ¥ (JPY)✔️
* ko-KR (Korean - Republic of Korea): ₩ (KRW)✔️
* nl-BE (Belgian Dutch): € (EUR)✔️
* nl-NL (Standard Dutch - Netherlands): € (EUR)✔️
* no-NO (Norwegian - Norway): kr (NOK)❌
* pl-PL (Polish - Poland): zł (PLN)❌
* pt-BR (Brazilian Portuguese): R$ (BRL)✔️
* pt-PT (European Portuguese - Portugal): € (EUR)✔️
* ro-RO (Romanian - Romania): lei (RON)✔️
* ru-RU (Russian - Russian Federation): ₽ (RUB)❌
* sk-SK (Slovak - Slovakia): € (EUR)❌
* sv-SE (Swedish - Sweden): kr (SEK)❌
* ta-IN (Indian Tamil): ₹ (INR)✔️
* ta-LK (Sri Lankan Tamil): රු (LKR)✔️
* th-TH (Thai - Thailand): ฿ (THB)✔️
* tr-TR (Turkish - Turkey): ₺ (TRY)✔️
* zh-CN (Mainland China - simplified characters): ¥ (CNY)✔️
* zh-HK (Hong Kong - traditional characters): HK$ (HKD)✔️
* zh-TW (Taiwan - traditional characters): NT$ (TWD)✔️
        * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


// Indonesia Currency
var currency = "Rp";
var currencyCountry = "id-ID";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Note: Please read and config before start
* Bank account and QRIS Image config here 🔧 
*-----------------------------------------------------------------------------------------------
* Please changes with your bank account if you using bank :
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
var bankName = "BRI"; // Changes with your bank
var accountHolder = "Pondenet"; // Changes with your name
var accountNo = "1234567899"; // Changes with your account number (Rekening)
var qrisImg = "/static/img/QR-Default.png";// Change with your QRIS code
var downloadFilename = "QR-Default-scan.png";//Change with your QRIS code file name
// ---------------------------------------------------------------------------------------------



// DANGER AREA!//❌

// Function to note data Do not change the code below if you do not understand.⚠️
$("#noteUserOrder").text(noteUserOrder); //❌
$(".noteUserOrder").text(noteUserOrder); //❌

// Function to bank account data Do not change the code below if you do not understand.⚠️
$("#bankName").text(bankName);//❌
$("#accountHolder").text(accountHolder);//❌
$("#accountNo").text(accountNo);//❌

$(".bankName").text(bankName);//❌
$(".accountHolder").text(accountHolder);//❌
$(".accountNo").text(accountNo);//❌
$(".qrisImg").attr("src", qrisImg);
$("a.qrisImg").attr("href", qrisImg).attr("download", downloadFilename);

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Note: Please It is recommended to change this line of code if you do not understand it ⚠️
*-----------------------------------------------------------------------------------------------
* Example starter JavaScript for disabling form submissions if there are invalid fields
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Note: Please It is recommended to change this line of code if you do not understand it ⚠️
*-----------------------------------------------------------------------------------------------
* Copy clipboard for BANK Account Number
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

function copyToClipboard(elementId, button) {
    const element = document.getElementById(elementId); // Get the element with the specified ID
    const text = element.innerText; // Get the text inside the element

    navigator.clipboard.writeText(text) // Use the Clipboard API to write the text to the clipboard
        .then(() => {
            button.innerText = 'Copied!'; // Change the text of the button
            setTimeout(() => {
                button.innerText = 'Copy'; // Change the text of the button back after a delay
            }, 2000); // Delay in milliseconds before changing the text back
        })
        .catch(() => alert('Failed to copy text to clipboard'));
}






// Update favicon
$("#favicon").attr("href", newFavicon);

// Update theme color
$("#themeColor").attr("content", newThemeColor);

// Update logo
$(".logocolor").attr("src", logoColor);
$(".logowhite").attr("src", logoWhite);

const date = new Date();
const hour = date.getHours();

let greeting = "";

if (hour < 12) {
    greeting = "Good morning";
} else if (hour < 18) {
    greeting = "Good afternoon";
} else if (hour < 24) {
    greeting = "Good evening";
} else {
    greeting = "Good night";
}

document.getElementById("greeting").textContent = greeting;

// Scroll horizontal
const container = document.querySelector('.scroll-horizontal');
let isDown = false;
let startX;
let scrollLeft;

container.addEventListener('mousedown', (e) => {
    isDown = true;
    container.classList.add('active');
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
});

container.addEventListener('mouseleave', () => {
    isDown = false;
    container.classList.remove('active');
});

container.addEventListener('mouseup', () => {
    isDown = false;
    container.classList.remove('active');
});

container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 3;
    container.scrollLeft = scrollLeft - walk;
});

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Note: Please It is recommended to change this line of code if you do not understand it ⚠️
*-----------------------------------------------------------------------------------------------
* Function for redirect to whatsApp 
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
function redirectToWhatsApp() {
    var phoneNumber = whatsAppNumber;
    var message = encodeURIComponent(introWa);

    window.location.href = 'https://wa.me/' + phoneNumber + '?text=' + message;
}

