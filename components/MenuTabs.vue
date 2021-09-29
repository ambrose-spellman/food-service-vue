<template>
    <div class="menu">
        <b-tabs content-class="w-100">
            <b-tab class="menu_tab-title" title="Комбо" active>
                <div ref="combo">
                    <h3 class="menu_title">Комбо</h3>
                    <div class="d-md-flex">
                        <div class="col-md-6">
                            <div class="menu_item d-flex">
                                <div class="col-3">
                                    <img class="menu_item-img" src="../static/images/product1.svg" alt="">
                                </div>
                                <div class="col-9 pr-0">
                                    <h4 class="menu_item-title">Kombo Doner</h4>
                                    <p class="menu_item-content">Куриный донер, фри, cola 0,5</p>
                                    <button class="menu_item-change">Изменить ингредиенты</button>
                                    <button class="menu_item-add-to-basket">В корзину <span>1490 ₸</span></button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="menu_item d-flex">
                                <div class="col-3">
                                    <img class="menu_item-img" src="../static/images/product1.svg" alt="">
                                </div>
                                <div class="col-9 pr-0">
                                    <h4 class="menu_item-title">Kombo Doner</h4>
                                    <p class="menu_item-content">Куриный донер, фри, cola 0,5</p>
                                    <button class="menu_item-change">Изменить ингредиенты</button>
                                    <button class="menu_item-add-to-basket">В корзину <span>1490 ₸</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </b-tab>

            <b-tab class="menu_tab-title" title="Донер">
                <div ref="doner">
                    <h3 class="menu_title">Донер</h3>
                        <div class="d-md-flex">
                        <div class="col-md-6">
                            <div class="menu_item d-flex">
                                <div class="col-3">
                                    <img class="menu_item-img" src="../static/images/product2.svg" alt="">
                                </div>
                                <div class="col-9 pr-0">
                                    <h4 class="menu_item-title">Kombo Doner</h4>
                                    <p class="menu_item-content">Куриный донер, фри, cola 0,5</p>
                                    <button class="menu_item-change">Изменить ингредиенты</button>
                                    <button class="menu_item-add-to-basket">В корзину <span>1490 ₸</span></button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="menu_item d-flex">
                                <div class="col-3">
                                    <img class="menu_item-img" src="../static/images/product2.svg" alt="">
                                </div>
                                <div class="col-9 pr-0">
                                    <h4 class="menu_item-title">Kombo Doner</h4>
                                    <p class="menu_item-content">Куриный донер, фри, cola 0,5</p>
                                    <button class="menu_item-change">Изменить ингредиенты</button>
                                    <button class="menu_item-add-to-basket">В корзину <span>1490 ₸</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </b-tab>
            <b-tab class="menu_tab-title" title="Бургер">
                <div ref="burger">
                        <h3 class="menu_title">Бургер</h3>
                        <div class="d-md-flex">
                        <div class="col-md-6">
                            <div class="menu_item d-flex">
                                <div class="col-3">
                                    <img class="menu_item-img" src="../static/images/product3.svg" alt="">
                                </div>
                                <div class="col-9 pr-0">
                                    <h4 class="menu_item-title">Kombo Doner</h4>
                                    <p class="menu_item-content">Куриный донер, фри, cola 0,5</p>
                                    <button class="menu_item-change">Изменить ингредиенты</button>
                                    <button class="menu_item-add-to-basket">В корзину <span>1490 ₸</span></button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="menu_item d-flex">
                                <div class="col-3">
                                    <img class="menu_item-img" src="../static/images/product3.svg" alt="">
                                </div>
                                <div class="col-9 pr-0">
                                    <h4 class="menu_item-title">Kombo Doner</h4>
                                    <p class="menu_item-content">Куриный донер, фри, cola 0,5</p>
                                    <button class="menu_item-change">Изменить ингредиенты</button>
                                    <button class="menu_item-add-to-basket">В корзину <span>1490 ₸</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </b-tab>
                <b-tab class="menu_tab-title" title="Напитки">
                <div ref="burger">
                        <h3 class="menu_title">Напитки</h3>
                        <div class="d-md-flex">
                        <div class="col-md-6">
                            <div class="menu_item d-flex">
                                <div class="col-3">
                                    <img class="menu_item-img" src="../static/images/product1.svg" alt="">
                                </div>
                                <div class="col-9 pr-0">
                                    <h4 class="menu_item-title">Kombo Doner</h4>
                                    <p class="menu_item-content">Куриный донер, фри, cola 0,5</p>
                                    <button class="menu_item-change">Изменить ингредиенты</button>
                                    <button class="menu_item-add-to-basket">В корзину <span>1490 ₸</span></button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="menu_item d-flex">
                                <div class="col-3">
                                    <img class="menu_item-img" src="../static/images/product1.svg" alt="">
                                </div>
                                <div class="col-9 pr-0">
                                    <h4 class="menu_item-title">Kombo Doner</h4>
                                    <p class="menu_item-content">Куриный донер, фри, cola 0,5</p>
                                    <button class="menu_item-change">Изменить ингредиенты</button>
                                    <button class="menu_item-add-to-basket">В корзину <span>1490 ₸</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </b-tab>
                <b-tab class="menu_tab-title" title="Снэки">
                <div ref="burger">
                        <h3 class="menu_title">Снэки</h3>
                        <div class="d-md-flex">
                        <div class="col-md-6">
                            <div class="menu_item d-flex">
                                <div class="col-3">
                                    <img class="menu_item-img" src="../static/images/product1.svg" alt="">
                                </div>
                                <div class="col-9 pr-0">
                                    <h4 class="menu_item-title">Kombo Doner</h4>
                                    <p class="menu_item-content">Куриный донер, фри, cola 0,5</p>
                                    <button class="menu_item-change">Изменить ингредиенты</button>
                                    <button class="menu_item-add-to-basket">В корзину <span>1490 ₸</span></button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="menu_item d-flex">
                                <div class="col-3">
                                    <img class="menu_item-img" src="../static/images/product1.svg" alt="">
                                </div>
                                <div class="col-9 pr-0">
                                    <h4 class="menu_item-title">Kombo Doner</h4>
                                    <p class="menu_item-content">Куриный донер, фри, cola 0,5</p>
                                    <button class="menu_item-change">Изменить ингредиенты</button>
                                    <button class="menu_item-add-to-basket">В корзину <span>1490 ₸</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </b-tab>
        </b-tabs>
    </div>
</template>
<script>
export default {
    name: "MenuTabs",
    data() {
        return {
            posts: []
        }
  },
  
  }

</script>
<style lang="scss" scoped>
@import '../assets/variables.scss';
@import '../assets/media.scss';
::v-deep .nav-tabs {
    border-bottom: none;
    margin-bottom: 30px;
    @include media(">desktop") {
        display: flex;
        flex-direction: column;
        margin-right: 80px;
    }
}
::v-deep .nav-item{
    @include media(">desktop") {
        margin-bottom: 15px;
    }

}
::v-deep .nav-tabs .nav-link {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    border-top: none;
    border-left: none;
    border-right: none;
    padding: 5px 0;
    margin: 0 12px;
    color: $black;
    &:first-child {
        margin: 0 12px 0 0;
    }
    @include media(">desktop") {
        font-size: 18px;
        line-height: 21px;
        padding: 5px 15px;
    }


}
::v-deep .nav-tabs .nav-link.active, ::v-deep.nav-tabs .nav-item.show .nav-link,
::v-deep .nav-tabs .nav-link:hover, ::v-deep.nav-tabs .nav-link:focus  {
    color: $orange;
    border-bottom: 2px solid $orange;
   
    @include media(">desktop") {
        border-bottom: none;
        border-left: 2px solid $orange;
       
    }
    
}
.menu {
    margin-bottom: 100px;
        @include media(">desktop") {
            margin-bottom: 120px;
        }
    &_title {
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        font-feature-settings: 'pnum' on, 'lnum' on;
        color: $black;
        margin-bottom: 30px;
        @include media(">desktop") {
            font-size: 20px;
            line-height: 23px;
        }
    }
    &_item {
        background: $light_grey;
        border-radius: 10px;
        padding: 15px;
        margin-bottom: 20px;
        font-feature-settings: 'pnum' on, 'lnum' on;
        color: $black;
        margin-left: 25px;
        &-title {
            font-weight: bold;
            font-size: 14px;
            line-height: 16px;
            margin-bottom: 10px;
            @include media(">desktop") {
                font-size: 18px;
                line-height: 21px;
            }
           
        }
        &-content {
            font-weight: 500;
            font-size: 12px;
            margin-bottom: 10px;
            line-height: 14px;
             @include media(">desktop") {
                font-size: 16px;
                line-height: 19px;
            }
        }
        &-change {
            font-weight: bold;
            font-size: 14px;
            line-height: 16px;
            color: $orange;
            margin-bottom: 20px;
            padding: 0;
             @include media(">desktop") {
               font-size: 16px;
                line-height: 19px;
            }
        }
        &-add-to-basket {
            @include button
        }
        &-img {
            position: absolute;
            top: 20px;
            left: -50px;
            width: 119px;
            @include media(">desktop") {
                width: 130px;
            }
        }
    }
    
}

.tabs {
    @include media(">desktop") {
        display: flex;

    }
}
</style>