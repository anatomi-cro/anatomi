const style = `
<style>
.anatomi_container_new{
    display: flex;
    border: 1px solid #3173FF;
    border-radius: 3px;
    gap: 10px;
    align-items: center;
    padding: 5px;
}

  
        
</style>
`

// Silinecekler
const a_text =  document.querySelectorAll('.customer-form.inner p')[1].remove();

// HTML

const a_html = `
<div class="anatomi_container_new">

    <div class="iconContainer">
        <svg class="infoIcon" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_10_18)">
        <path d="M10.4998 0C8.42306 0 6.39299 0.615814 4.66627 1.76957C2.93956 2.92332 1.59375 4.5632 0.799025 6.48182C0.00430536 8.40045 -0.20363 10.5116 0.201515 12.5484C0.60666 14.5852 1.60669 16.4562 3.07514 17.9246C4.54359 19.3931 6.41451 20.3931 8.45131 20.7982C10.4881 21.2034 12.5993 20.9955 14.5179 20.2007C16.4366 19.406 18.0764 18.0602 19.2302 16.3335C20.3839 14.6068 20.9998 12.5767 20.9998 10.5C20.9967 7.71615 19.8895 5.04718 17.9211 3.0787C15.9526 1.11022 13.2836 0.00301095 10.4998 0V0ZM10.4998 19.25C8.76917 19.25 7.07745 18.7368 5.63852 17.7754C4.19959 16.8139 3.07808 15.4473 2.41581 13.8485C1.75355 12.2496 1.58027 10.4903 1.91789 8.79296C2.25551 7.09563 3.08887 5.53653 4.31258 4.31282C5.53629 3.08911 7.09539 2.25575 8.79272 1.91813C10.4901 1.58051 12.2494 1.75379 13.8482 2.41605C15.4471 3.07832 16.8137 4.19983 17.7751 5.63876C18.7366 7.07769 19.2498 8.76941 19.2498 10.5C19.2472 12.8199 18.3245 15.044 16.6841 16.6844C15.0437 18.3248 12.8196 19.2475 10.4998 19.25Z" fill="#3173FF"/>
        <path d="M10.5 8.75H9.625C9.39294 8.75 9.17038 8.84219 9.00628 9.00628C8.84219 9.17038 8.75 9.39294 8.75 9.625C8.75 9.85706 8.84219 10.0796 9.00628 10.2437C9.17038 10.4078 9.39294 10.5 9.625 10.5H10.5V15.75C10.5 15.9821 10.5922 16.2046 10.7563 16.3687C10.9204 16.5328 11.1429 16.625 11.375 16.625C11.6071 16.625 11.8296 16.5328 11.9937 16.3687C12.1578 16.2046 12.25 15.9821 12.25 15.75V10.5C12.25 10.0359 12.0656 9.59075 11.7374 9.26256C11.4092 8.93437 10.9641 8.75 10.5 8.75Z" fill="#3173FF"/>
        <path d="M10.5 7C11.2249 7 11.8125 6.41237 11.8125 5.6875C11.8125 4.96263 11.2249 4.375 10.5 4.375C9.77513 4.375 9.1875 4.96263 9.1875 5.6875C9.1875 6.41237 9.77513 7 10.5 7Z" fill="#3173FF"/>
        </g>
        <defs>
        <clipPath id="clip0_10_18">
        <rect width="21" height="21" fill="white"/>
        </clipPath>
        </defs>
        </svg>
    </div>

    <div class="a_textContainer">
    
    <div class="a_textBox">Hasar anında, ödemelerde kesinti olmaması için seçilen mesleğin belgelenmesi gerekmektedir.</div>
</div>

</div>
`

// Ekleme

const a_chkbox = document.querySelectorAll('label.chkbox')[1]


a_chkbox.insertAdjacentHTML('beforebegin', a_html);


const a_head = document.querySelector('head');
a_head.insertAdjacentHTML('afterbegin', style);
