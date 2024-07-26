const form = document.getElementById('customerInfoForm');
let intervalId;

if (form) {
    let efekt;

    function handleVisibilityChange() {
        if (document.hidden) {
            document.title = "Sigorta teklifi almak ister misiniz?";
            let titleText = document.title;
            let position = 0;
            efekt = function () {
                document.title = titleText.substring(position) + " " + titleText.substring(0, position);
                position+=10;
                if (position > titleText.length) {
                    position = 0;
                }
            };
            intervalId = setInterval(efekt, 1);
        } else {
            document.title = "Trafik Sigortası Kişisel Bilgiler";
            clearInterval(intervalId);
        }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange, false);
}
