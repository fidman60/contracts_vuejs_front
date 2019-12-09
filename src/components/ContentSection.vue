<template>
    <transition name="content-trans">
        <div v-if="!locked" class="col-6 offset-md-3 p-0">
            <div class="pt-4 px-3">
                <h1 class="font-weight-bold h5 mb-3 title-color">Conditions générales contrat</h1>
                <div id="head" class="d-flex justify-content-between px-4 py-4 text-white align-items-center mb-4">
                    <div class="position-relative">
                        <div id="contract-title" class="font-weight-bold h5 d-flex align-items-center">
                            <transition name="input-trans">
                                <div v-if="!showEditTitle" class="d-flex align-items-center">
                                    <span>{{ contract.title }}</span>
                                    <span class="ml-2" id="edit-contract-title-btn" v-on:click="openEditTitle()">
                                    <svg width="15px" height="15px" viewBox="0 0 20 19" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                                                <desc>Created with Lunacy</desc>
                                                <g id="icons8-edit">
                                                    <path d="M15.4141 0C15.1581 0 14.902 0.0979687 14.707 0.292969L12.707 2.29297L11.293 3.70703L0 15L0 19L4 19L18.707 4.29297C19.098 3.90197 19.098 3.26891 18.707 2.87891L16.1211 0.292969C15.9261 0.0979687 15.6701 0 15.4141 0ZM15.4141 2.41406L16.5859 3.58594L15.293 4.87891L14.1211 3.70703L15.4141 2.41406ZM13.8789 6.29297L12.707 5.12109L2 15.8281L2 17L3.17188 17L13.8789 6.29297Z" id="Shape" fill="white" fill-rule="evenodd" stroke="none" />
                                                </g>
                                            </svg>
                                </span>
                                </div>
                            </transition>
                            <transition name="input-trans">
                                <div v-if="showEditTitle" class="d-flex align-items-center position-absolute">
                                    <input v-model="newTitle" style="width: auto" type="text" class="text-white form-control bg-transparent border-top-0 border-left-0 border-right-0 border-bottom">
                                    <span style="font-size: 15px" class="ml-2 clickable" v-on:click="editTitle()">
                                    <i class="fas fa-check"></i>
                                </span>
                                    <span style="font-size: 15px" v-on:click="closeEditTitle()" class="ml-2 clickable">
                                    <i class="fas fa-times"></i>
                                </span>
                                </div>
                            </transition>
                        </div>
                        <p class="mt-3">Dernière mise à jour : {{ lastUpdateFormattedDate }}</p>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="rounded-circle avatar position-relative avatar-behind">
                            <img src="../assets/avatar1.png" alt="image"/>
                        </div>
                        <div class="rounded-circle avatar position-relative avatar-top">
                            <img src="../assets/avatar2.png" alt="image"/>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div :key="condition.id" v-for="(condition,index) in contract.conditions" class="d-flex justify-content-between align-items-start py-4 px-3 border-bottom-cond" :class="{'border-bottom':contract.conditions.length-1 !== index}">
                    <div class="d-flex align-items-start">
                        <div class="mr-2">
                            <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                                <desc>Created with Lunacy</desc>
                                <g id="icons8-ok">
                                    <path d="M0 7.8C0 3.49206 3.49206 0 7.8 0C12.1079 0 15.6 3.49206 15.6 7.8C15.6 12.1079 12.1079 15.6 7.8 15.6C3.49206 15.6 0 12.1079 0 7.8ZM6.79147 11.4715L12.2515 6.01146C12.5564 5.70648 12.5564 5.21352 12.2515 4.90854C11.9465 4.60356 11.4535 4.60356 11.1485 4.90854L6.24001 9.81708L4.45147 8.02854C4.14649 7.72356 3.65353 7.72356 3.34855 8.02854C3.04357 8.33352 3.04357 8.82648 3.34855 9.13146L5.68855 11.4715C5.84065 11.6236 6.04033 11.7 6.24001 11.7C6.43969 11.7 6.63937 11.6236 6.79147 11.4715Z" id="Shape" fill="#00BE7E" fill-rule="evenodd" stroke="none" />
                                </g>
                            </svg>
                        </div>
                        <div>
                            <div class="h6 title-color font-weight-bold">{{ condition.title }}</div>
                            <div class="detail-condition">{{ condition.desc }}</div>
                        </div>
                    </div>
                    <div class="position-relative">
                        <div class="item-btn" v-on:click="toggleBtn(condition)">
                            <svg width="24px" height="6px" viewBox="0 0 24 6" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                                <desc>Created with Lunacy</desc>
                                <path d="M3 0C1.34315 0 0 1.34315 0 3C0 4.65685 1.34315 6 3 6C4.65685 6 6 4.65685 6 3C6 1.34315 4.65685 0 3 0ZM12 0C10.3431 0 9 1.34315 9 3C9 4.65685 10.3431 6 12 6C13.6569 6 15 4.65685 15 3C15 1.34315 13.6569 0 12 0ZM18 3C18 1.34315 19.3431 0 21 0C22.6569 0 24 1.34315 24 3C24 4.65685 22.6569 6 21 6C19.3431 6 18 4.65685 18 3Z" id="Shape" fill="#D0D0D0" fill-rule="evenodd" stroke="none" />
                            </svg>
                        </div>
                        <div :class="{'d-none':!condition.showBox}">
                            <div class="position-absolute files-block-arrow">
                                <svg width="25px" height="14px" viewBox="0 0 25 14" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                                    <desc>Created with Lunacy</desc>
                                    <path d="M12 0L24 13L0 13L12 0Z" transform="translate(0.5 0.5)" id="Triangle" fill="white" stroke="none" />
                                </svg>
                            </div>
                            <div class="position-absolute bg-white border-circle files-block">
                                <div class="d-flex mb-3 clickable" v-on:click="showEditCondition">
                                    <div style="width: 20px;" class="mr-3 align-center">
                                        <svg width="20px" height="19px" viewBox="0 0 20 19" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                                            <desc>Created with Lunacy</desc>
                                            <g id="icons8-edit">
                                                <path d="M15.4141 0C15.1581 0 14.902 0.0979687 14.707 0.292969L12.707 2.29297L11.293 3.70703L0 15L0 19L4 19L18.707 4.29297C19.098 3.90197 19.098 3.26891 18.707 2.87891L16.1211 0.292969C15.9261 0.0979687 15.6701 0 15.4141 0ZM15.4141 2.41406L16.5859 3.58594L15.293 4.87891L14.1211 3.70703L15.4141 2.41406ZM13.8789 6.29297L12.707 5.12109L2 15.8281L2 17L3.17188 17L13.8789 6.29297Z" id="Shape" fill="#7D92A8" fill-rule="evenodd" stroke="none" />
                                            </g>
                                        </svg>
                                    </div>
                                    Modifier article
                                </div>
                                <div class="d-flex mb-3 clickable" v-on:click="showDeleteCondition">
                                    <div style="width: 20px;" class="mr-3 align-center">
                                        <svg width="20px" height="22px" viewBox="0 0 20 22" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                                            <desc>Created with Lunacy</desc>
                                            <g id="icons8-delete_trash">
                                                <path d="M5 1L6 0L10 0L11 1L16 1L16 3L15 3L15 13L13 13L13 3L3 3L3 18L11 18L11 20L3 20C1.90694 20 1 19.0931 1 18L1 3L0 3L0 1L5 1ZM5 16L5 5L7 5L7 16L5 16ZM9 5L9 16L11 16L11 5L9 5ZM12.4648 16.3438L13.8789 14.9297L16 17.0508L18.1211 14.9297L19.5352 16.3438L17.4141 18.4648L19.5352 20.5859L18.1211 22L16 19.8789L13.8789 22L12.4648 20.5859L14.5859 18.4648L12.4648 16.3438Z" id="Shape" fill="#7D92A8" fill-rule="evenodd" stroke="none" />
                                            </g>
                                        </svg>
                                    </div>
                                    Supprimer article
                                </div>
                                <div class="d-flex clickable">
                                    <div style="width: 20px;" class="mr-3 align-center">
                                        <svg width="16px" height="4px" viewBox="0 0 16 4" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                                            <desc>Created with Lunacy</desc>
                                            <g id="icons8-more">
                                                <path d="M2 0C0.895431 0 0 0.895431 0 2C0 3.10457 0.895431 4 2 4C3.10457 4 4 3.10457 4 2C4 0.895431 3.10457 0 2 0ZM8 0C6.89543 0 6 0.895431 6 2C6 3.10457 6.89543 4 8 4C9.10457 4 10 3.10457 10 2C10 0.895431 9.10457 0 8 0ZM12 2C12 0.895431 12.8954 0 14 0C15.1046 0 16 0.895431 16 2C16 3.10457 15.1046 4 14 4C12.8954 4 12 3.10457 12 2Z" id="Shape" fill="#7D92A8" fill-rule="evenodd" stroke="none" />
                                            </g>
                                        </svg>
                                    </div>
                                    Plus
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="px-3 mt-2">
                <div class="position-relative d-flex justify-content-center">
                    <div id="edit_article_block" class="col-10 m-auto position-absolute rounded-lg bg-white" :class="{'d-none':!showAddArticleOverlay}">
                        <div class="p-4">
                            <form>
                                <div class="mb-3">
                                    <label class="article-form-label">Titre de l'article</label>
                                    <input type="text" class="form-control article-form-input" v-model="articleTitle" placeholder="Exemple">
                                </div>
                                <div class="mb-3">
                                    <label class="article-form-label">Description</label>
                                    <textarea class="form-control article-form-input" v-model="articleDescription" rows="3" placeholder="Détailler ici votre article"></textarea>
                                </div>
                                <div class="d-flex justify-content-end">
                                    <button id="article_form_decline_btn" v-on:click.prevent="toggleAddArticleForm()" class="btn px-5 py-1 bg-white rounded-pill mr-3">Annuler</button>
                                    <button id="article_form_btn" v-on:click.prevent="addArticle(articleTitle, articleDescription);articleTitle='';articleDescription=''" class="btn text-white rounded-pill px-5 py-1">Ajouter</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="position-absolute m-auto arrow-bottom" :class="{'d-none':!showAddArticleOverlay}">
                        <svg width="25px" height="14px" viewBox="0 0 25 14" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                            <desc>Created with Lunacy</desc>
                            <path d="M12 0L24 13L0 13L12 0Z" transform="translate(0.5 0.5)" id="Triangle" fill="white" stroke="none" />
                        </svg>
                    </div>
                    <button id="add-article-btn" v-on:click.prevent="toggleAddArticleForm()" class="btn d-flex justify-content-center align-items-center p-4 w-full">
                        <div class="mr-3">
                            <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                                <desc>Created with Lunacy</desc>
                                <path d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM10 2C14.411 2 18 5.589 18 10C18 14.411 14.411 18 10 18C5.589 18 2 14.411 2 10C2 5.589 5.589 2 10 2ZM9 9L9 6L11 6L11 9L14 9L14 11L11 11L11 14L9 14L9 11L6 11L6 9L9 9Z" id="Shape" fill="#484C7F" fill-rule="evenodd" stroke="none" />
                            </svg>
                        </div>
                        <div class="font-weight-bold title-color h5 m-0 p-0">Ajouter un article</div>
                    </button>
                </div>
            </div>
            <div class="px-3 my-4 d-flex justify-content-end">
                <button id="decline-btn" class="btn bg-transparent border-0 rounded-pill py-2 pl-5 pr-5">Annuler</button>
                <button id="send-btn" class="btn text-white border-0 rounded-pill py-2 pl-5 pr-5">Accepter</button>
            </div>
        </div>
    </transition>
</template>

<script>
    import {categories} from "@/service/data";

    export default {
        name: "ContentSection",
        props: {
            contract: {
                type: Object,
                validator: function (value) {
                    return typeof value === "object" || value === null;
                }
            },
            showEditCondition: {
                type: Function,
                required: true,
            },
            showAddArticleOverlay: {
                type: Boolean,
                required: true
            },
            showEditConditionOverlay: {
                type: Boolean,
                required: true
            },
            locked: {
                type: Boolean,
                required: true
            },
            lastUpdateFormattedDate: {
                type: String,
                required: true
            },
            showDeleteCondition: {
                type: Function,
                required: true,
            },
            addArticle: {
                type: Function,
                required: true,
            },
        },
        data() {
            return {
                props: ['contract', 'showEditConditionOverlay', 'showAddArticleOverlay', 'lastUpdateFormattedDate', 'showOverlay', 'activeItem', 'showDeleteCondition', 'addArticle'],
                showEditTitle: false,
                newTitle: "",
                articleTitle: "",
                articleDescription: "",
                categories,
            }
        },
        methods: {
            toggleBtn: function(condition){
                this.$emit('toggle-overlay', condition);
            },
            toggleAddArticleForm: function () {
                this.$emit('toggle-add-article-overlay');
            },
            openEditTitle: function () {
                this.showEditTitle = true;
                this.newTitle = this.$props.contract.title;
            },
            closeEditTitle: function () {
                this.showEditTitle = false;
            },
            editTitle: function () {
                this.$props.contract.title = this.newTitle;
                this.showEditTitle = false;
            },
        }
    }
</script>

<style scoped>
    .title-color {
        color: #484c7f;
    }

    #head {
        background: #5165F5;
    }

    .avatar {
        border: 4px solid rgba(255,255,255,0.8);
    }

    .avatar-top {
        z-index: 2
    }

    .avatar-behind {
        right: -25px
    }

    .detail-condition {
        color: #8192a6;
    }

    #add-article-btn {
        background: #eeeeee;
        cursor: pointer;
        width: 100%;
        border: none;
    }

    #send-btn {
        background: linear-gradient(180deg, #5165F5, #0E2397);
        box-shadow: 0 6px 34px #a8b1f1;
    }

    #decline-btn {
        color: #484c7f;;
    }

    .border-bottom-cond {
        border-color: #f2f2f2;
    }
    .files-block {
        box-shadow: 0 0 30px rgba(233,233,233,0.2);
        border-radius: 5px;
        top: 35px;
        z-index: 2000;
        width: 260px;
        left: -230px;
        padding: 20px;
        color: #7D92A8;
    }
    .files-block-arrow {
        z-index: 3000;
        top: 20px;
    }
    .item-btn {
        cursor: pointer;
    }
    #article_form_btn {
        background: linear-gradient(180deg, #5165F5, #0E2397);
        box-shadow: 0 6px 34px #a8b1f1;
        color: #3549ce;
    }
    .article-form-input {
        background: #F8F8F8;
        border: none;
    }
    .article-form-input::placeholder {
        color: #b4b8b8;
    }
    .article-form-label {
        color: #949999;
    }
    #article_form_decline_btn {
        box-sizing: border-box;
        border: 1px solid #4f69db;
        color: #657ce0;
    }
    #edit_article_block {
        box-shadow: 0 0 30px rgba(122,122,122,0.5);
        top: 0;
        transform: translateY(calc(-100% - 20px));
        cursor: default;
        z-index: 3000;
    }
    .arrow-bottom {
        z-index: 3900;
        top: 0;
        transform: translateY(-30px) rotate(180deg);
    }
    #edit-contract-title-btn {
        display: none;
        cursor: pointer;
    }

    #contract-title:hover #edit-contract-title-btn {
        display: inline;
    }

    #contract-title {
        height: 32px;
    }

    .input-trans-enter-active, .input-trans-leave-active {
        transition: opacity .4s ease-in;
    }

    .input-trans-enter, .input-trans-leave-to {
        opacity: 0;
    }
    .clickable {
        cursor: pointer;
    }
    .content-trans-enter, .content-trans-leave-to {
        transform: translateY(-100%);
    }
    .content-trans-enter-active, .content-trans-leave-active {
        transition: all 1s .4s;
    }

</style>