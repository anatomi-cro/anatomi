const a_style = `

<style>

.form-steps{
    justify-content:center !important;
}
.form-steps .step {
    display: flex !important;
    flex-direction: column;
    justify-content: center !important;
    align-items: center !important;
    position: relative !important;
}

.form-steps .step.active {
    display: flex;
    font-weight: bold;
    padding: 15px;
    margin: 0;
    position: relative !important;
    width: unset !important;
    background: none !important;    
}

.form-steps .step.active::after {
    content: "";
    background: #3173FF;
    width: 100%;
    height: 10px;
    position: absolute;
    left: 45%;
    bottom: 55%;
    z-index: -2;
}

.step::after {
    content: "";
    width: 100%;
    height: 10px;
    background: grey;
    position: absolute;
    left: 59%;
    bottom: 55%;
    z-index: -10;

}

.step:nth-child(3)::after {
  content: none !important;
}
.form-steps > div {
    flex-shrink: unset !important;
}

.step.no-after::after {
    display: none !important;
}

.arac_after::after {
  content: none !important;

}

@media (max-width: 400px) {
    .step.active::after{
        bottom: 64% !important;
        left: 50px !important;
    }
    .step::after {
        left: 63% !important;
        bottom: 64% !important;
    }
  }
</style>;
`

// Mutation Observer oluşturun
const a_observer = new MutationObserver(function (mutationsList) {
    if (mutationsList[0]) {
        document.querySelectorAll('.number').forEach((item) => {
            if (item.innerText == 1) {
            }
            if (
                item.parentElement.classList.contains('active') &&
                item.innerText == 2
            ) {
                if (
                    !item.parentElement.previousElementSibling.classList.contains(
                        'active'
                    )
                ) {
                    item.parentElement.previousElementSibling.classList.add(
                        'active'
                    )
                }
            }
            if (
                item.parentElement.classList.contains('active') &&
                item.innerText == 3
            ) {
                if (
                    !item.parentElement.previousElementSibling.classList.contains(
                        'active'
                    )
                ) {
                    item.parentElement.previousElementSibling.classList.add(
                        'active'
                    )
                }
            }
        })
    }
})

// Observer'ı .main öğesine bağlayın ve childList değişikliklerini izleyin
const targetElement = document.querySelectorAll('.step')
if (targetElement) {
    targetElement.forEach((item) => {
        a_observer.observe(item, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeOldValue: true,
            attributeFilter: ['class'],
        })
    })
}

const a_head = document.querySelector('head')
a_head.insertAdjacentHTML('afterbegin', a_style)
