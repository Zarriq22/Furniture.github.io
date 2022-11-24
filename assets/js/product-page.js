class ProductPage extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <img data-image="red" class="active" src="assets/images/slider/slider1.jpg">
        `;  
    }    
}
customElements.define('product-page', ProductPage);