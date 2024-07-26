const dask_form_style = `
<style>
.anatomi_dask_sticky_container {
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 9999;
    width: 100%;
    height: fit-content;
  }
  .anatomi_dask_sticky_content {
    display: flex;
    flex-direction: column;
  }
  .anatomi_dask_sticky_buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
  }
  .anatomi_dask_sticky_buttons a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
    width: 45%;
    border: none;
    border-radius: 5px;
    background-color: #4372f6;
    color: white;
    font-size: 14px;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
  }

  .anatomi_dask_sticky_form {
    position: fixed;
    bottom: 10%;
    right: 0;
    width: 100%;
    max-height: 0;
    overflow: hidden;
    padding: 0 10px;
    transition: max-height 0.5s ease-in-out;
    background-color: #fff;
  }

  .anatomi_dask_sticky_form.form-active {
    max-height: 100%;
    background-color: #fff;
    z-index: 999;
    transition: max-height 0.5s ease-in-out;
  }

  .close-dask-form {
    position: absolute;
    top: 2%;
    right: 3%;
    cursor: pointer;
    background-color: #fff;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .close-dask-form:active {
    transform: scale(0.9);
  }

@media  (max-width: 767px) {
    .blog .content .right-side .pre-form {
        display: flex !important;
    }
}
</style>
`;

const anatomi_sticky_dask_html = `
<div class="anatomi_dask_sticky_container">
      <div class="anatomi_dask_sticky_content">
        <div class="anatomi_dask_sticky_buttons">
            <a href="/dask-sigortasi?blog" class="anatomi_sticky_buttons_dask">
                Dask Sigortası Teklifi Al
            </a>
            <a href="/konut-sigortasi?blog" class="anatomi_sticky_buttons_konut">
                Konut Sigortası Teklifi Al
            </a>
        </div>
      </div>
 </div>
`;


if(window.innerWidth < 768) {
    const body = document.querySelector('body');
    const anaHead = document.querySelector('head');
    body.insertAdjacentHTML('beforeend', anatomi_sticky_dask_html);
    anaHead.insertAdjacentHTML('beforeend', dask_form_style);

}