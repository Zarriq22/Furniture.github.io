let selectedProduct = ""
let no_wa = 087720681873

function detailProduct(identifier){
    selectedProduct = identifier.getAttribute('id')

    sessionStorage.setItem("SelectedProduct", selectedProduct)

    console.log(selectedProduct);

    window.location.href = 'product-page.html'
}

class ProductCard extends HTMLElement{
    connectedCallback() {
        let image = this.attributes.image.value
        let url = this.attributes.url.value

        this.innerHTML = `
        <div class="single-new-arrival">
            <div class="single-new-arrival-bg">
                <img src=${image} alt="new-arrivals images")">

                <a href="#" id="${image}" onclick="return detailProduct(this)" >
                    <div class="single-new-arrival-bg-overlay"></div>   
                </a>
                
                <div class="sale bg-1">
                    <p>sale</p>
                </div>
                <div class="new-arrival-cart">
					<button class="btn-new">
						<a href="https://wa.me/${no_wa}/?text=Saya ingin memesan barang, dengan kode barang: ${url}"><img src="assets/wa.png" alt=""></a>
						<span>Buy Via WhatsApp</span>
					</button>
					<p class="arrival-review pull-right">
						<span class="lnr lnr-heart"></span>
						<span class="lnr lnr-frame-expand"></span>
					</p>
				</div>
            </div>
            <h4><a href="#">wooden chair</a></h4>
            <p class="arrival-product-price">$65.00</p>
        </div>

        `;  
    }
}

class ProductSlide extends HTMLElement{
    connectedCallback() {
        var idClass    = "single-slide-item "+this.attributes.classid.value
        var image      = this.attributes.image.value
		var logo_wa    = this.attributes.logo_wa.value
		var url        = this.attributes.url.value

        this.innerHTML = `
		<div class="${idClass}">
			<div class="container">
				<div class="welcome-hero-content">
					<div class="row">
						<div class="col-sm-7">
							<div class="single-welcome-hero">
								<div class="welcome-hero-txt">
									<h4>great design collection</h4>
									<h2>mapple wood accent chair</h2>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiuiana smod tempor  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. 
									</p>
									<div class="packages-price">
										<p>
											$ 199.00
											<del>$ 299.00</del>
										</p>
									</div>
									<button class="btn-cart welcome-add-cart" onclick="window.location.href='#'">
										<a href="https://wa.me/${no_wa}/?text=Saya ingin memesan barang, dengan kode barang: ${url}">
											<img src="${logo_wa}" alt="">
											<span>Order Via WhatsApp</span>
										</a>
									</button>
									<button class="btn-cart welcome-add-cart welcome-more-info" onclick="window.location.href='#'">
										more info
									</button>
								</div>
							</div>
						</div>
						<div class="col-sm-5">
							<div class="single-welcome-hero">
								<div class="welcome-hero-img">
									<img src="${image}" alt="slider image">
								</div><!--/.welcome-hero-txt-->
							</div><!--/.single-welcome-hero-->
						</div><!--/.col-->
					</div><!--/.row-->
				</div><!--/.welcome-hero-content-->
			</div><!-- /.container-->
		</div><!-- /.single-slide-item-->

        `;  
    }
}

class ProductPage extends HTMLElement{
    constructor() {
        let nama = "rudi"
        super();
        console.log("ProductDetail:", selectedProduct);
    }

    connectedCallback(){
        this.innerHTML = `
                <img data-image="red" class="active" src="${sessionStorage.getItem("SelectedProduct")}" alt="">
        `;  
    }    
}

customElements.define('product-card', ProductCard);
customElements.define('product-slide', ProductSlide);
customElements.define('product-page', ProductPage);
