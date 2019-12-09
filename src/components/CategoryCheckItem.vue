<template>
    <div class="container position-relative">
        <transition name="deplace1">
            <div v-show="!selectedCategory" class="row">
                <div class="w-50" v-for="(category,index) in categories" :key="category.id">
                    <div
                            v-on:click="selectCategory(category)"
                            class="rounded-sm bg-white item-check p-4 mb-4 position-relative"
                            :class="{'mr-1':index % 2 === 0, 'ml-1':index % 2 !== 0, 'semi-opacity':selectedCategory && selectedCategory.id !== category.id}"
                    >
                        <transition name="fade">
                            <div v-show="selectedCategory && selectedCategory.id === category.id" class="position-absolute checked-icon">
                                <svg width="12px" height="12px" viewBox="0 0 12 12" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                                    <desc>Created with Lunacy</desc>
                                    <g id="icons8-ok">
                                        <path d="M0 6C0 2.6862 2.6862 0 6 0C9.3138 0 12 2.6862 12 6C12 9.3138 9.3138 12 6 12C2.6862 12 0 9.3138 0 6ZM5.2242 8.8242L9.4242 4.6242C9.6588 4.3896 9.6588 4.0104 9.4242 3.7758C9.1896 3.5412 8.8104 3.5412 8.5758 3.7758L4.8 7.5516L3.4242 6.1758C3.1896 5.9412 2.8104 5.9412 2.5758 6.1758C2.3412 6.4104 2.3412 6.7896 2.5758 7.0242L4.3758 8.8242C4.4928 8.9412 4.6464 9 4.8 9C4.9536 9 5.1072 8.9412 5.2242 8.8242Z" id="Shape" fill="#00BE7E" fill-rule="evenodd" stroke="none" />
                                    </g>
                                </svg>
                            </div>
                        </transition>
                        <div class="py-2 d-flex justify-content-between align-items-center icon-category">
                            <div class="item-label">{{ category.label }}</div>
                            <span :class="category.icon"></span>
                        </div>
                    </div>
                    <div class="w-100" v-if="index+1 % 2 === 0"></div>
                </div>
            </div>
        </transition>
        <transition name="deplace2">
            <div v-if="selectedCategory" v-show="selectedCategory" class="row text-white">
                <div class="cat-content">
                    <div class="tab-pane fade active show" id="tab-dev" role="tabpanel" aria-labelledby="dev-tab">
                        <h2 id="categorie-title" class="cat-title d-flex align-items-center">
                            <div style="width: 60px;height: 42px;">
                                <span :class="selectedCategory.icon"></span>
                            </div>
                            <div class="text">{{ selectedCategory.label }}</div>
                        </h2>
                        <div class="cat-select-items">
                            <ul id="list-categories" class="cat-list">
                                <li v-for="subCategory in selectedCategory.subCategories" class="cat-list-item">
                                    <div class="form-group">
                                        <input type="checkbox" name="skills[ui_designer]" v-model="checkedSubCategories" :value="subCategory.id" class="form-check-input" :id="'sub_category_'+subCategory.id">
                                        <label class="form-check-label" :for="'sub_category_'+subCategory.id">
                                            {{ subCategory.label }}
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="w-100 d-flex mt-2 justify-content-center">
                    <button v-on:click="addConditions(checkedSubCategories);checkedSubCategories=[]" class="btn border-white border-1 text-white rounded-pill confirm-categories-btn">Confirmer</button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>

    export default {
        name: 'CategoryCheckItem',
        props: {
            categories: {
                type: Array,
                required: true,
            },
            selectedCategory: {
                required: true,
                validator: function (value) {
                    return typeof value === "object" || value === null;
                }
            },
            selectCategory: {
                type: Function,
                required: true,
            },
            addConditions: {
                type: Function,
                required: true,
            }
        },
        data () {
            return {
                props: ['categories', 'selectedCategory', 'selectCategory'],
                checkedSubCategories: [],
            }
        },
        methods: {
        }
    }
</script>

<style scoped>
    .item-label {
        font-size: small;
        color: #303030;
        font-family: sans-serif;
    }
    .checked-icon {
        top: 0;
        right: 6px
    }
    .item-check {
        cursor: pointer;
        opacity: 1;
    }
    .semi-opacity {
        transition: opacity .4s;
        opacity: 0.5;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .4s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .deplace1-enter-active, .deplace1-leave-active {
        transition: transform .4s .4s;
    }
    .deplace1-enter, .deplace1-leave-to {
        transform: translateX(200%);
    }

    .deplace2-enter-active, .deplace2-leave-active {
        transition: transform .4s .8s;
    }
    .deplace2-enter, .deplace2-leave-to {
        transform: translateX(-200%);
    }
    .icon-category {
        color: #5165F5;
    }


    /* test */
    .cat-content label {
        line-height: 1.3em !important;
    }
    .cat-content .cat-title .text {
        color: white;
        font-size: 20px;
        font-weight: 300;
        margin: 0;
        display: inline-block;
        vertical-align: middle;
    }
    .cat-content .cat-title .icon {
        font-size: 38px;
        color: white;
        vertical-align: middle;
    }
    .cat-content .cat-select-items {
        margin-top: 30px;
        padding-left: 80px;
        overflow-y: auto;
        overflow-x: hidden;
    }
    .cat-content .cat-list-item {
        position: relative;
        width: 100%;
    }
    .cat-content .form-check-label {
        color: white;
        font-size: 14px;
        font-weight: 300;
        margin-left: 8px;
        cursor: pointer;
        vertical-align: top;
    }
    .cat-content .form-check-input {
        cursor: pointer;
        margin-top: 0;
    }
    .cat-content .form-check-input:before {
        content: "";
        width: 17px;
        height: 17px;
        background: white;
        border-radius: 2px;
        display: block;
    }
    .cat-content .form-check-input:after {
        content: "";
        display: block;
        width: 13px;
        height: 13px;
        background-image: linear-gradient(189deg, #5165f5, #0e2397);
        border-radius: 2px;
        position: absolute;
        left: 2px;
        top: 2px;
        transform: scale(0);
        transition: 200ms linear;
    }
    .cat-content .form-check-input:checked:after {
        transform: scale(1.1);
    }
    .cat-inner-container:not(.selected) .validity-check {
        background: #4357e2 !important;
        color: #fff !important;
    }
    .cat-inner-container .icon {
        color: #4357e2;
        font-size: 40px;
    }
    .cat-inner-container .cat-parent-title {
        color: #303030;
        font-size: 14px;
        font-weight: 300;
        line-height: 19px;
        margin-top: 18px;
    }
    .cat-inner-container:hover .icon, .cat-inner-container.selected .icon, .cat-inner-container:hover .cat-parent-title, .cat-inner-container.selected .cat-parent-title {
        color: white;
    }
    input[type=checkbox].choice-cat.valid + label .validity-check {
        -webkit-animation-name: validityCheckEnter;
        animation-name: validityCheckEnter;
    }
    #list-categories {
        padding: 0;
    }
    .confirm-categories-btn {
        padding-left: 40px;padding-right: 40px
    }
    @-webkit-keyframes validityCheckEnter {
        0% {
            -webkit-transform: scale(0);
            transform: scale(0);
        }
        55% {
            -webkit-transform: scale(1.08);
            transform: scale(1.08);
        }
        75% {
            -webkit-transform: scale(0.95);
            transform: scale(0.95);
        }
        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }
    @keyframes validityCheckEnter {
        0% {
            -webkit-transform: scale(0);
            transform: scale(0);
        }
        55% {
            -webkit-transform: scale(1.08);
            transform: scale(1.08);
        }
        75% {
            -webkit-transform: scale(0.95);
            transform: scale(0.95);
        }
        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }

</style>