<template>
    <transition name="section-trans">
        <div v-if="locked" class="col-6 offset-md-3 p-0">
            <div class="pt-4 px-3">
                <div style="box-shadow: 0 0 19px 0 rgba(237,225,237,1);" class="p-4">
                    <h1 class="font-weight-bold h5 mb-3 title-color">Conditions générales contrat</h1>
                    <p class="custom-txt">Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p>
                    <p class="custom-txt">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney</p>
                    <div class="d-flex justify-content-end mt-4">
                        <button id="condition_form_decline_btn" class="btn px-5 py-1 bg-white rounded-pill mr-3">Annuler</button>
                        <button id="condition_form_btn" v-on:click.prevent="unlock()" class="btn text-white rounded-pill px-5 py-1">Accepter</button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "ConditionsConfirmationSection",
        props: {
            unlock: {
                type: Function,
                required: true,
            },
            locked: {
                type: Boolean,
                required: true,
            },
        }
    }
</script>

<style scoped>
    #condition_form_decline_btn {
        box-sizing: border-box;
        border: 1px solid #4f69db;
        color: #657ce0;
    }
    #condition_form_btn {
        background: #5165F5;
        color: #3549ce;
    }
    .title-color {
        color: #484c7f;
    }
    .custom-txt {
        font-size: small;
    }
    .section-trans-enter, .section-trans-leave-to {
        transform: translateY(-200%);
    }
    .section-trans-enter-active, .section-trans-leave-active {
        transition: all .5s;
    }
</style>