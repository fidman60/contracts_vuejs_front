<template>
    <div id="side-menu" class="col-3 p-4 vh-100 position-fixed">
        <transition name="overlay-fade">
            <div v-if="locked" id="sidemenu-overlay" class="display-1 text-white position-absolute d-flex justify-content-center align-items-center">
                <i class="fas fa-user-lock"></i>
            </div>
        </transition>
        <div :class="{'blur':locked}">
            <div class="d-flex justify-content-between align-center mb-3">
                <p class="font-weight-bold text-white h5">Quelle catégorie</p>
                <span v-on:click="returnBack()" :class="{'return-active':selectedCategory}" class="text-white return-forward"><i class="fas fa-chevron-right fa-lg"></i></span>
            </div>
            <div class="form-group has-search mb-5">
            <span class="form-control-feedback">
                <svg width="15px" height="15px" viewBox="0 -4 10 23" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                  <desc>Created with Lunacy</desc>
                  <defs>
                    <path d="M7.33872 15.2308Q4.06971 15.2308 1.75818 12.9193Q-0.553363 10.6077 -0.553363 7.33872Q-0.553364 4.06971 1.75818 1.75818Q4.06972 -0.553363 7.33873 -0.553363Q10.6077 -0.553363 12.9193 1.75818Q15.2308 4.06971 15.2308 7.33873Q15.2308 10.1899 13.4724 12.3127Q13.8148 12.3403 14.1572 12.6827L17.6015 16.127Q17.9151 16.4406 17.9151 16.8719Q17.9151 17.2926 17.6166 17.6014L17.6167 17.6015L17.6015 17.6167L17.6014 17.6166Q16.8642 18.3387 16.127 17.6015L12.6827 14.1572Q12.3403 13.8148 12.3127 13.4724Q10.1899 15.2308 7.33872 15.2308ZM7.33872 14.2523Q4.47502 14.2523 2.45008 12.2274Q0.425133 10.2024 0.425134 7.33872Q0.425134 4.47502 2.45008 2.45008Q4.47502 0.425134 7.33872 0.425134Q10.2024 0.425134 12.2274 2.45008Q14.2523 4.47502 14.2523 7.33872Q14.2523 10.2024 12.2274 12.2274Q10.2024 14.2523 7.33872 14.2523Z" id="path_1" />
                    <clipPath id="mask_1">
                      <use xlink:href="#path_1" />
                    </clipPath>
                  </defs>
                  <g id="search">
                    <path d="M7.33872 15.2308Q4.06971 15.2308 1.75818 12.9193Q-0.553363 10.6077 -0.553363 7.33872Q-0.553364 4.06971 1.75818 1.75818Q4.06972 -0.553363 7.33873 -0.553363Q10.6077 -0.553363 12.9193 1.75818Q15.2308 4.06971 15.2308 7.33873Q15.2308 10.1899 13.4724 12.3127Q13.8148 12.3403 14.1572 12.6827L17.6015 16.127Q17.9151 16.4406 17.9151 16.8719Q17.9151 17.2926 17.6166 17.6014L17.6167 17.6015L17.6015 17.6167L17.6014 17.6166Q16.8642 18.3387 16.127 17.6015L12.6827 14.1572Q12.3403 13.8148 12.3127 13.4724Q10.1899 15.2308 7.33872 15.2308ZM7.33872 14.2523Q4.47502 14.2523 2.45008 12.2274Q0.425133 10.2024 0.425134 7.33872Q0.425134 4.47502 2.45008 2.45008Q4.47502 0.425134 7.33872 0.425134Q10.2024 0.425134 12.2274 2.45008Q14.2523 4.47502 14.2523 7.33872Q14.2523 10.2024 12.2274 12.2274Q10.2024 14.2523 7.33872 14.2523Z" id="Shape" fill="#50B8E4" fill-rule="evenodd" stroke="none" />
                  </g>
                </svg>
            </span>
                <input type="text" id="search-input" class="form-control font-sm" placeholder="Search">
            </div>
            <CategoryCheckItem
                    :selected-category="selectedCategory"
                    :select-category="selectCategory"
                    :categories="categories"
                    :addConditions="addConditions"
            />
        </div>
    </div>
</template>

<script>
    import CategoryCheckItem from './CategoryCheckItem';

    export default {
        name: 'SideMenu',
        props: {
            locked: {
                type: Boolean,
                required: true,
            },
            categories: {
                type: Array,
                required: true,
            },
            addConditions: {
                type: Function,
                required: true,
            }
        },
        data () {
            return {
                selectedCategory: null,
            }
        },
        components: {
            CategoryCheckItem,
        },
        methods: {
            selectCategory: function (category) {
                this.selectedCategory = category;
            },
            returnBack: function () {
                if (this.selectedCategory) {

                    this.selectedCategory = null;
                }
            }
        }
    }
</script>

<style scoped>
    #side-menu {
        background: linear-gradient(180deg, #5165F5, #0E2397);
        z-index: 1;
        overflow-x: hidden;
        overflow-y: hidden;
    }
    .has-search .form-control {
        color: #1F263E;
        box-shadow: 0 3px 14px rgba(108,106,106,0.5);
        padding-left: 2.375rem;
        font-size: small;
    }
    .has-search .form-control-feedback {
        position: absolute;
        z-index: 2;
        display: block;
        width: 2.375rem;
        height: 2.375rem;
        line-height: 2.375rem;
        text-align: center;
        pointer-events: none;
    }
    #search-input {
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .return-forward {
        transition: all 1s;
        transform: rotateY(0deg)
    }

    .return-active {
        transform: rotateY(180deg);
        cursor: pointer;
    }
    #sidemenu-overlay {
        z-index: 4000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.4);
    }
    .blur {
        filter: blur(2px);
    }
    .overlay-fade-enter, .overlay-fade-leave-to {
        opacity: 0;
    }
    .overlay-fade-enter-active, .overlay-fade-leave-active {
        transition: all 1s;
    }
</style>
