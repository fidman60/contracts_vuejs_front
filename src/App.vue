<template>
  <div class="container-fluid" id="app">
    <div class="row">
      <transition name="fade">
        <div class="overlay" v-on:click="toggleOverlay()" v-show="showOverlay"></div>
      </transition>
      <transition name="fade">
        <div class="overlay" v-on:click="toggleAddArticleOverlay()" v-show="showAddArticleOverlay"></div>
      </transition>
      <transition name="fade">
        <div class="overlay d-flex justify-content-center align-items-center" v-on:click="toggleEditConditionOverlay" v-if="showEditConditionOverlay">
          <div id="edit_article_block" class="col-6 m-auto rounded-lg bg-white">
            <div class="p-4">
              <form>
                <div class="mb-3">
                  <label class="article-form-label">Titre de l'article</label>
                  <input v-model="conditionTitle" type="text" class="form-control article-form-input" placeholder="Exemple">
                </div>
                <div class="mb-3">
                  <label class="article-form-label">Description</label>
                  <textarea v-model="conditionDescription" class="form-control article-form-input" rows="3" placeholder="Détailler ici votre article"></textarea>
                </div>
                <div class="d-flex justify-content-end">
                  <button id="article_form_decline_btn" v-on:click.prevent="closeEditConditionOverlay" class="btn px-5 py-1 bg-white rounded-pill mr-3">Annuler</button>
                  <button id="article_form_btn" v-on:click.prevent="editCondition()" class="btn text-white rounded-pill px-5 py-1">Modifier</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </transition>
      <transition name="fade">
        <div class="overlay d-flex justify-content-center align-items-center" v-on:click="toggleDeleteConditionOverlay" v-if="showDeleteConditionOverlay">
          <div style="cursor: default" class="modal-dialog col-6 m-auto" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Supprimer</h5>
                <button type="button" v-on:click.prevent="closeDeleteConditionOverlay" class="close" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                Êtes-vous certain de vouloir supprimer l'article ?
              </div>
              <div class="modal-footer">
                <button type="button" v-on:click.prevent="toggleDeleteConditionOverlay" class="btn btn-secondary" data-dismiss="modal">NON</button>
                <button type="button" v-on:click.prevent="deleteCondition" class="btn btn-primary">OUI</button>
              </div>
            </div>
          </div>
        </div>
      </transition>
      <SideMenu :categories="categories" :locked="locked" :addConditions="addConditions"/>
      <ConditionsConfirmationSection :unlock="unlock" :locked="locked"/>
      <ContentSection :showAddArticleOverlay="showAddArticleOverlay"
                      :showEditConditionOverlay="showEditConditionOverlay"
                      :showEditCondition="showEditCondition"
                      :showDeleteCondition="showDeleteCondition"
                      :contract="contract"
                      :addArticle="addArticle"
                      :lastUpdateFormattedDate="lastUpdateFormattedDate"
                      v-on:toggle-overlay="toggleOverlay"
                      v-on:toggle-add-article-overlay="toggleAddArticleOverlay"
                      :locked="locked"
      />
      <InformationSection :contract="contract"/>
    </div>
  </div>
</template>

<script>
import SideMenu from './components/SideMenu';
import ContentSection from './components/ContentSection';
import InformationSection from "./components/InformationSection";
import {contracts} from "./service/data";
import moment from 'moment';
import ConditionsConfirmationSection from "@/components/ConditionsConfirmationSection";
import {categories} from "./service/data";

const contract = contracts[0];

contract.conditions = contract.conditions.map(item => ({
  ...item,
  showBox: false,
}));

export default {
  name: 'App',
  data(){
    return {
      locked: true,
      showOverlay: false,
      contract,
      activeItem: null,
      showAddArticleOverlay: false,
      showEditConditionOverlay: false,
      showDeleteConditionOverlay: false,
      conditionTitle: "",
      conditionDescription: "",
      categories,
    }
  },
  components: {
    ConditionsConfirmationSection,
    InformationSection,
    SideMenu,
    ContentSection,
  },
  methods: {
    toggleOverlay: function(condition = null) {
      if (!condition) {
        condition = this.activeItem;
        this.activeItem = null;
      } else this.activeItem = condition;
      condition.showBox = !condition.showBox;
      this.showOverlay = !this.showOverlay;
    },
    toggleAddArticleOverlay: function () {
      this.showAddArticleOverlay = !this.showAddArticleOverlay;
    },
    toggleEditConditionOverlay: function (e) {
      if (e.currentTarget === e.target)
        this.showEditConditionOverlay = !this.showEditConditionOverlay;
    },
    closeEditConditionOverlay: function() {
      this.showEditConditionOverlay = false;
    },
    showEditCondition: function () {
      this.showOverlay = false;
      this.contract.conditions = this.contract.conditions.map(item => ({
        ...item,
        showBox: false,
      }));
      this.showEditConditionOverlay = true;
      this.conditionTitle = this.activeItem.title;
      this.conditionDescription = this.activeItem.desc;
    },
    editCondition: function () {
      const index = this.contract.conditions.findIndex(item => item.id === this.activeItem.id);
      this.contract.conditions[index].title = this.conditionTitle;
      this.contract.conditions[index].desc = this.conditionDescription;
      this.showEditConditionOverlay = false;
    },
    toggleDeleteConditionOverlay: function (e) {
      if (e.currentTarget === e.target)
        this.showDeleteConditionOverlay = !this.showDeleteConditionOverlay;
    },
    closeDeleteConditionOverlay: function() {
      this.showDeleteConditionOverlay = false;
    },
    showDeleteCondition: function () {
      this.showOverlay = false;
      this.contract.conditions = this.contract.conditions.map(item => ({
        ...item,
        showBox: false,
      }));
      this.showDeleteConditionOverlay = true;
    },
    deleteCondition: function () {
      this.contract.conditions = this.contract.conditions.filter(item => item.id !== this.activeItem.id);
      this.showDeleteConditionOverlay = false;
    },
    addArticle: function (title, description) {
      const condition = {
        id: Math.floor(Math.random() * 10000),
        title: title,
        desc: description,
        showBox: false,
      };

      this.contract.conditions = [
        condition,
        ...this.contract.conditions
      ];
      this.showAddArticleOverlay = false;
    },
    unlock: function () {
      this.locked = false;
    },
    addConditions: function (conditions) {
      const addedConditions = [];
      for (let i=0;i<categories.length;i++) {
        for(let j=0;j<categories[i].subCategories.length;j++) {
          for(let e=0;e<conditions.length;e++){
            if (categories[i].subCategories[j].id === conditions[e]) {
              const cond = categories[i].subCategories[j].condition;
              addedConditions.push({
                id: Math.floor(Math.random() * 1201),
                ...cond,
                showBox: false,
              });
            }
          }
        }
      }
      this.contract.conditions = [
        ...addedConditions,
        ...this.contract.conditions
      ];
    }
  },
  computed: {
    lastUpdateFormattedDate: function () {
      if (this.contract) return moment(this.contract.last_update).format('D MMMM YYYY');
      return "n/a";
    }
  }
}
</script>

<style>
  .overlay {
    background-color: rgba(0,0,0,0.4);
    z-index: 2000;
    position: fixed;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  #edit_article_block {
    box-shadow: 0 0 30px rgba(122,122,122,0.5);
    z-index: 3000;
    cursor: default;
  }
  #article_form_decline_btn {
    box-sizing: border-box;
    border: 1px solid #4f69db;
    color: #657ce0;
  }
  #article_form_btn {
    background: linear-gradient(180deg, #5165F5, #0E2397);
    box-shadow: 0 6px 34px #a8b1f1;
    color: #3549ce;
  }
</style>
