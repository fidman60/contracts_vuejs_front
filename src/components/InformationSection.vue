<template>
    <div id="parent" class="col-3 pt-4">
        <h1 class="font-weight-bold h5 mb-3 title-color">Informations</h1>
        <div class="d-flex flex-column align-items-center bg-white rounded-lg p-4 info-block mb-4">
            <div class="position-relative mb-3">
                <img class="rounded-circle avatar" src="../assets/profile.png" alt="image"/>
                <div class="position-absolute" style="right: 10px;top: 90px">
                    <svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                        <desc>Created with Lunacy</desc>
                        <g id="verified">
                            <path d="M2.63598 2.63602C4.33589 0.936176 6.59598 0 9 0C11.404 0 13.6641 0.936176 15.3639 2.63602C17.0638 4.33593 18 6.59602 18 9C18 11.404 17.0638 13.6641 15.3639 15.3639C15.1515 15.5764 14.9302 15.777 14.701 15.9653C13.0968 17.2832 11.1035 18 9 18C6.59598 18 4.33589 17.0638 2.63598 15.3639C0.936141 13.6641 0 11.404 0 9C0 6.59602 0.936141 4.33589 2.63598 2.63602Z" id="Combined-Shape" fill="#9AE646" fill-rule="evenodd" stroke="none" />
                            <path d="M2.97867 5.92987C3.0816 6.0328 3.21657 6.08431 3.35153 6.08431C3.4865 6.08431 3.62143 6.0328 3.7244 5.92987L4.45423 5.20003L8.75406 0.900202C8.96001 0.694257 8.96001 0.360343 8.75406 0.154433C8.65109 0.0514792 8.51613 1.6399e-06 8.38117 -2.75465e-09C8.24621 1.32625e-06 8.11125 0.0514789 8.00827 0.154433L4.45422 3.70848L4.45422 3.70856L3.35157 4.81123L0.900229 2.35989C0.694283 2.15398 0.360369 2.15398 0.154459 2.35989C-0.0514863 2.56583 -0.0514863 2.89975 0.154459 3.10566L2.97867 5.92987Z" transform="translate(4.545776 5.957825)" id="Combined-Shape" fill="#FFFFFF" fill-rule="evenodd" stroke="none" />
                        </g>
                    </svg>
                </div>
            </div>
            <div id="full-name" class="h6 font-weight-bold">{{ contract.owner.fname + ' ' + contract.owner.lname }}</div>
            <div id="skills">{{ skillsString }}</div>
            <div id="rating-section" class="d-flex justify-content-between py-2 w-100 my-3" style="font-size: small">
                <div id="rating">
                    <star-rating
                            :show-rating="false"
                            :increment="0.1"
                            :read-only="true"
                            :rating="contract.owner.review_score"
                            :star-size="17"
                            :padding="4"
                    />
                </div>
                <div id="rating-evaluation">
                    <span class="font-weight-bold">{{ reviewScore }}</span> ({{ contract.owner.total_reviews }} reviews)
                </div>
            </div>
            <button id="message-btn" class="btn text-white border-0 rounded-pill btn-block py-2 mt-2">Message</button>
            <div class="w-100 pt-4">
                <div class="d-flex mb-2 align-items-center">
                    <div class="mr-2">
                        <svg width="23px" height="23px" viewBox="0 0 23 23" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                            <desc>Created with Lunacy</desc>
                            <g id="linkedin">
                                <path d="M11.4182 22.636C17.7243 22.636 22.8364 17.5688 22.8364 11.318C22.8364 5.06725 17.7243 0 11.4182 0C5.11209 0 0 5.06725 0 11.318C0 17.5688 5.11209 22.636 11.4182 22.636Z" id="Oval" fill="#007AB9" stroke="none" />
                                <path d="M1.54446 0C0.610823 0 0 0.607482 0 1.40562C0 2.18682 0.593115 2.81185 1.50864 2.81185L1.52635 2.81185C2.4783 2.81185 3.07019 2.18682 3.07019 1.40562C3.05208 0.607482 2.4783 0 1.54446 0ZM12.731 7.39266L12.731 12.0588L10.0017 12.0588L10.0017 7.70538C10.0017 6.61227 9.60769 5.86578 8.61951 5.86578C7.86539 5.86578 7.4174 6.36835 7.21956 6.85498C7.14771 7.0289 7.12919 7.2704 7.12919 7.51432L7.12919 12.0586L4.39972 12.0586C4.39972 12.0586 4.43636 4.68532 4.39972 3.92208L7.12939 3.92208L7.12939 5.07511C7.1239 5.08418 7.11616 5.09306 7.11128 5.10174L7.12939 5.10174L7.12939 5.07511C7.4921 4.5219 8.13895 3.73102 9.58917 3.73102C11.3848 3.73102 12.731 4.89393 12.731 7.39266ZM2.89068 12.0589L0.162231 12.0589L0.162231 3.92212L2.89068 3.92212L2.89068 12.0589Z" transform="translate(5.509399 4.83606)" id="Shape" fill="#F1F2F2" fill-rule="evenodd" stroke="none" />
                            </g>
                        </svg>
                    </div>
                    Roger Barton
                </div>
                <div class="d-flex mb-2 align-items-center">
                    <div class="mr-2">
                        <svg width="23px" height="23px" viewBox="0 0 23 23" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                            <desc>Created with Lunacy</desc>
                            <g id="behance">
                                <path d="M11.4182 22.8364C17.7243 22.8364 22.8364 17.7243 22.8364 11.4182C22.8364 5.11209 17.7243 0 11.4182 0C5.11209 0 0 5.11209 0 11.4182C0 17.7243 5.11209 22.8364 11.4182 22.8364Z" id="Oval" fill="#4176FA" stroke="none" />
                                <path d="M5.59612 3.92588C5.59612 3.92588 6.90611 3.8296 6.90611 2.28942C6.90611 0.753504 5.83467 0 4.47442 0L0 0L0 8.60078L4.47401 8.60078C4.47401 8.60078 7.20714 8.68464 7.20714 6.0604C7.20735 6.0604 7.32458 3.92588 5.59612 3.92588ZM8.9985 1.56542L8.9985 0.506407L12.5478 0.506407L12.5478 1.56542L8.9985 1.56542ZM4.47421 1.52757L1.97149 1.52757L1.97149 3.44858L4.31932 3.44858C4.72538 3.44858 5.08117 3.31872 5.08117 2.42314C5.08117 1.52757 4.47421 1.52757 4.47421 1.52757ZM7.54624 5.4913C7.54624 5.47441 7.55051 2.18887 10.8485 2.18887C14.3308 2.18887 13.8411 5.92219 13.8411 5.92219L9.38787 5.92219C9.38787 7.51693 10.8987 7.41638 10.8987 7.41638C12.33 7.41638 12.28 6.4915 12.28 6.4915L13.7908 6.4915C13.7908 8.94822 10.8485 8.78091 10.8485 8.78091C7.32031 8.78091 7.54624 5.4913 7.54624 5.4913ZM10.8821 3.44858C9.55518 3.44858 9.37097 4.77118 9.37097 4.77118L12.192 4.77118C12.192 4.77118 12.213 3.44858 10.8821 3.44858ZM4.34883 7.07321L1.97149 7.07321L1.97149 4.77118L4.47421 4.77118C4.47421 4.77118 5.38261 4.76283 5.37834 5.95558C5.37834 6.96025 4.70462 7.06487 4.34883 7.07321Z" transform="translate(4.663097 7.243371)" id="Shape" fill="#F1F2F2" fill-rule="evenodd" stroke="none" />
                            </g>
                        </svg>
                    </div>
                    Ethan Meyer
                </div>
                <div class="d-flex">
                    <div class="mr-2 align-items-center">
                        <svg width="23px" height="23px" viewBox="0 0 23 23" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                            <desc>Created with Lunacy</desc>
                            <g id="dribbble">
                                <path d="M11.4182 22.8364C17.7243 22.8364 22.8364 17.7243 22.8364 11.4182C22.8364 5.11209 17.7243 0 11.4182 0C5.11209 0 0 5.11209 0 11.4182C0 17.7243 5.11209 22.8364 11.4182 22.8364Z" id="Oval" fill="#F26798" stroke="none" />
                                <path d="M7.26047 0C3.25704 0 0 3.25318 0 7.25151C0 11.2498 3.25704 14.5028 7.26047 14.5028C11.2641 14.5028 14.5213 11.2501 14.5213 7.25151C14.5213 3.25318 11.2641 0 7.26047 0ZM11.302 2.6566C10.2218 1.70994 8.80758 1.13514 7.26047 1.13514C6.7852 1.13514 6.32235 1.18989 5.87762 1.29288C6.12716 1.62954 7.1758 3.07976 8.13386 4.83102C10.2037 4.04902 11.131 2.88986 11.302 2.6566ZM4.62565 1.72948C4.83712 2.02074 5.88739 3.48643 6.87008 5.22365C4.23281 5.9169 1.89088 5.96209 1.32565 5.96209L1.26561 5.96209C1.67167 4.09074 2.93606 2.5357 4.62565 1.72948ZM12.0382 3.42252C12.8664 4.44897 13.3697 5.74532 13.3929 7.15788C13.1173 7.1013 11.9502 6.88372 10.5556 6.88372C10.1055 6.88372 9.63191 6.90631 9.15705 6.96493C9.11696 6.86743 9.07686 6.77034 9.03473 6.67224C8.91158 6.3826 8.77888 6.0952 8.64149 5.81208C10.788 4.9277 11.8234 3.70035 12.0382 3.42252ZM1.12883 7.10985C1.1272 7.16012 1.12639 7.2106 1.12639 7.26108C1.12639 8.81653 1.71035 10.2376 2.67105 11.3201C2.93036 10.8916 4.61547 8.27023 7.68139 7.28001C7.74876 7.25803 7.81654 7.23828 7.88534 7.21854C7.73899 6.89064 7.58166 6.56253 7.41638 6.23931C4.69342 7.04736 2.05107 7.11026 1.28983 7.11026C1.21961 7.11026 1.16547 7.11026 1.12883 7.10985ZM9.55925 8.00542C10.3221 10.1096 10.6527 11.8348 10.7349 12.3068C12.0781 11.3813 13.0347 9.93539 13.3117 8.26453C13.0787 8.19329 12.0758 7.91261 10.7937 7.91261C10.4033 7.91261 9.98709 7.93887 9.55925 8.00542ZM7.26047 13.3866C5.8536 13.3866 4.55522 12.9101 3.5192 12.1112C3.69445 11.7677 4.96637 9.47763 8.3262 8.30829C8.32824 8.30748 8.33048 8.30666 8.33292 8.30605C9.17537 10.4994 9.53218 12.3402 9.63008 12.9107C8.901 13.2173 8.10027 13.3866 7.26047 13.3866Z" transform="translate(4.157505 4.166867)" id="Shape" fill="#F1F2F2" fill-rule="evenodd" stroke="none" />
                            </g>
                        </svg>
                    </div>
                    Alex Gray
                </div>
            </div>
        </div>
        <a href="#">
            <div id="dwn-contract" class="rounded-lg w-100">
                <div class="h2 font-weight-bold text-white text-center pt-3">Télécharger le contrat</div>
            </div>
        </a>
    </div>
</template>

<script>

    import numeral from 'numeral';
    import StarRating from 'vue-star-rating';

    export default {
        name: "InformationSection",
        props: {
            contract: {
                type: Object,
                required: true,
            }
        },
        components: {
            StarRating,
        },
        data(){
            return {
                props: ['contract'],
                skillsString: '',
            };
        },
        mounted() {
            let skills = this.$props.contract.owner.skills.map(skill => skill.label);
            this.skillsString = skills.join(', ');
        },
        computed: {
            reviewScore: function () {
                return numeral(this.contract.owner.review_score).format('0.0');
            }
        }
    }
</script>

<style scoped>
    #parent {
        background-color: #fcfafa;
    }
    .title-color {
        color: #484c7f;
    }
    .avatar {
        border: 4px solid rgba(171,159,159,0.2);
    }
    #full-name {
        color: #394dd3;
        line-height: 0.5;
    }
    #skills{
        color: #33394e;
    }
    #rating {
        color: #ffc328;
    }
    #empty-star {
        color: #eeeeee
    }
    #rating-evaluation{
        color: #8192A6;
        font-size: 1rem;
    }
    #rating-section {
        border-top: 1px solid #f2f2f2;
        border-bottom: 1px solid #f2f2f2;
    }
    #message-btn {
        background: linear-gradient(180deg, #5165F5, #0E2397);
        box-shadow: 0 6px 34px #a8b1f1;
    }
    .info-block {
        box-shadow: 0 0 30px rgba(233,233,233,0.5);
    }
    #dwn-contract {
        background-image: url('../assets/download-contract-bg.png');
        height: 359px;
        background-repeat: no-repeat;
        background-size: 100% auto;
        background-position: left bottom;
    }
</style>