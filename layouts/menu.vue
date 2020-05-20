<template>
  <div>
    <input
      id="sidebar-trigger"
      type="checkbox"
      class="hidden"
    >
    <label
      for="sidebar-trigger"
      class="sidebar-overlay"
    />
    <div class="sidebar-top">
      <label
        class="ripple-100 sidebar-top__trigger"
        for="sidebar-trigger"
      >
        <img
          width="20"
          src="images/base/icons/burger/square/base.svg"
          alt=""
        >
      </label>
      <div class="sidebar-top__logo">
        <img
          src="images/logo.svg"
          alt=""
        >
      </div>
    </div>
    <div
      v-isolated-scroll="{ isolateX: false, isolateY: true }"
      class="sidebar isolated-scroll"
      data-accordion-group
    >
      <div class="sidebar__head">
        <table class="table">
          <tr>
            <td class="sidebar__ic">
              <div class="sidebar__head__ic">
                <label
                  class="ripple-100"
                  for="sidebar-trigger"
                >
                  <img
                    width="20"
                    src="images/base/icons/burger/square/base.svg"
                    alt=""
                  >
                </label>
              </div>
            </td>
            <td>
              <img
                src="images/logo.svg"
                alt=""
              >
            </td>
          </tr>
        </table>
      </div>
      <div class="sidebar__title">
        Introduction
      </div>
      <div class="sidebar__list">
        <a
          class="sidebar__item table"
          href="#"
        >
          <div class="text td">Landing page (comming soon)</div>
        </a>
      </div>
      <div class="sidebar__list">
        <a
          class="sidebar__item table"
          href="index.html"
        >
          <div class="text td">Initialization</div>
        </a>
      </div>
      <div class="sidebar__title">
        Forms
      </div>
      <div class="sidebar__list active">
        <a
          class="sidebar__item table"
          href="1-1-forms-clean-border.html"
        >
          <div class="text td">Clean | Border | Line</div>
        </a>
      </div>
      <div class="sidebar__list">
        <a
          class="sidebar__item table"
          href="1-2-forms-line-material.html"
        >
          <div class="text td">Material 1,2,3</div>
        </a>
      </div>
      <div class="sidebar__list">
        <a
          class="sidebar__item table"
          href="1-3-forms-upload.html"
        >
          <div class="text td">Upload</div>
        </a>
      </div>
      <div class="sidebar__list">
        <a
          class="sidebar__item table"
          href="#"
        >
          <div class="text td">Range (Comming soon)</div>
        </a>
      </div>
      <div class="sidebar__list">
        <a
          class="sidebar__item table"
          href="1-5-forms-parsley.html"
        >
          <div class="text td">Form Parsley</div>
        </a>
      </div>
      <div class="sidebar__list">
        <a
          class="sidebar__item table"
          href="1-6-textarea.html"
        >
          <div class="text td">Textarea</div>
        </a>
      </div>
      <div class="sidebar__list">
        <a
          class="sidebar__item table"
          href="1-7-forms-group-mix.html"
        >
          <div class="text td">Formgroup item</div>
        </a>
      </div>
      <div class="sidebar__title">
        Tables
      </div>
      <div class="sidebar__list">
        <a
          class="sidebar__item table"
          href="2-1-tables-page.html"
        >
          <div class="text td">Pagination</div>
        </a>
      </div>
      <div class="sidebar__list">
        <a
          class="sidebar__item table"
          href="2-2-table.html"
        >
          <div class="text td">Tables | Datatables</div>
        </a>
      </div>
      <div class="sidebar__title">
        Modals
      </div>
      <div class="sidebar__list">
        <a
          class="sidebar__item table"
          href="3-1-modals-bootstrap.html"
        >
          <div class="text td">Bootstrap Modals</div>
        </a>
      </div>
      <div class="sidebar__title">
        Dropdowns
      </div>
      <div class="sidebar__list">
        <a
          class="sidebar__item table"
          href="4-1-dropdowns-bootstrap.html"
        >
          <div class="text td">Bootstrap Dropdowns</div>
        </a>
      </div>
      <div class="sidebar__title">
        Tabs
      </div>
      <div class="sidebar__list">
        <a
          class="sidebar__item table"
          href="5-1-tabs.html"
        >
          <div class="text td">Material tabs</div>
        </a>
      </div>
      <div class="sidebar__title">
        Accordion
      </div>
      <div class="sidebar__list">
        <a
          class="sidebar__item table"
          href="6-1-accordion-jquery.html"
        >
          <div class="text td">Jquery Accordion</div>
        </a>
      </div>
      <div class="sidebar__title">
        Carousels
      </div>
      <div class="sidebar__list">
        <a
          class="sidebar__item table"
          href="7-1-carousel-swiper.html"
        >
          <div class="text td">Swiper</div>
        </a>
      </div>
      <div class="sidebar__title">
        Images slider
      </div>
      <div class="sidebar__list">
        <a
          class="sidebar__item table"
          href="8-1-light-gallery.html"
        >
          <div class="text td">Light gallery</div>
        </a>
      </div>
      <div class="sidebar__title">
        Others
      </div>
      <div class="sidebar__list">
        <a
          class="sidebar__item table"
          href="9-1-sticky-sidebar.html"
        >
          <div class="text td">Sticky sidebar</div>
        </a>
      </div>
      <div class="sidebar__list">
        <a
          class="sidebar__item table"
          href="10-1-pallarax.html"
        >
          <div class="text td">Pallarax</div>
        </a>
      </div>
      <div class="sidebar__title">
        Elelment components
      </div>
      <div class="sidebar__list">
        <a
          class="sidebar__item table"
          href="11-1-profiles.html"
        >
          <div class="text td">Profiles</div>
        </a>
      </div>
      <div class="sidebar__list">
        <a
          class="sidebar__item table"
          href="11-2-lists.html"
        >
          <div class="text td">Lists</div>
        </a>
      </div>
      <div class="sidebar__list">
        <a
          class="sidebar__item table"
          href="11-3-cards.html"
        >
          <div class="text td">Cards</div>
        </a>
      </div>
      <div class="sidebar__list">
        <a
          class="sidebar__item table"
          href="11-4-tags.html"
        >
          <div class="text td">Tags</div>
        </a>
      </div>
      <div class="sidebar__list">
        <a
          class="sidebar__item table"
          href="11-5-icons.html"
        >
          <div class="text td">Icons</div>
        </a>
      </div>
      <div class="sidebar__list">
        <a
          class="sidebar__item table"
          href="11-6-social.html"
        >
          <div class="text td">Social icons</div>
        </a>
      </div>
      <div class="sidebar__list">
        <a
          class="sidebar__item table"
          href="11-7-box.html"
        >
          <div class="text td">Box</div>
        </a>
      </div>
      <div class="sidebar__list">
        <a
          class="sidebar__item table"
          href="11-8-steps.html"
        >
          <div class="text td">Steps</div>
        </a>
      </div>
      <div class="sidebar__list">
        <a
          class="sidebar__item table"
          href="11-9-footer.html"
        >
          <div class="text td">Footer</div>
        </a>
      </div>
    </div>
    <nuxt />
  </div>
</template>

<style>
/* sidebar-top */
.sidebar-top__trigger {
  width: 44px;
  height: 44px;
  line-height: 44px;
  text-align: center;
  position: fixed;
  top: 20px;
  left: 20px;
  border-radius: 30px;
  background: #fff;
  box-shadow: 3px 10px 30px rgba(36, 40, 65, 0.3);
}
.sidebar-top {
  padding-left: 84px;
  padding-top: 30px;
  padding-bottom: 30px;
}
@media (max-width: 1200px) {
  .sidebar-top__trigger {
    z-index: 1069;
  }
}
@media (min-width: 1200px) {
  .sidebar-top__logo {
    display: none;
  }
}
/*end sidebar-top */

/*sidebar*/

.main--with-sidebar {
  margin-left: 260px;
  margin-right: 20px;
}

@media (max-width: 1200px) {
  .main {
    transition: 0.2s opacity ease-in-out;
  }
  #sidebar-trigger:checked ~ *:not(.sidebar):not(.sidebar-overlay) {
    filter: blur(10px);
  }
  .main--with-sidebar {
    margin-left: 20px;
  }
}

@media (max-width: 599px) {
  .main--with-sidebar {
    margin: 0;
  }
}

.sidebar {
  position: fixed;
  top: 0;
  height: 100%;
  width: 240px;
  background-color: #eaeff3;
  color: #242841;
  z-index: 90;
  overflow-y: auto;
  padding-bottom: 30px;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  box-shadow: inset 0 10px 40px rgba(0, 0, 0, 0.03);
}

@media (max-width: 1200px) {
  .sidebar {
    z-index: 101;
  }
}

.sidebar::-webkit-scrollbar {
  width: 4px;
}

.sidebar::-webkit-scrollbar-thumb {
  background: #f2f1f7;
  position: absolute;
  right: 0;
}

.sidebar::-webkit-scrollbar-track {
  width: 17px;
}

@media (max-width: 480px) {
  .sidebar {
    width: 80vw;
  }
}

.sidebar::-webkit-scrollbar-thumb {
  background: transparent;
}

.sidebar:hover::-webkit-scrollbar {
  width: 4px;
}

.sidebar:hover::-webkit-scrollbar-thumb {
  background: #e0e4eb;
  border-radius: 10px;
}

.sidebar:hover::-webkit-scrollbar-track {
  width: 17px;
}

.sidebar__dropdown {
  -webkit-transition: 0.2s all ease-in-out;
  transition: 0.2s all ease-in-out;
  height: auto;
  width: 22px;
}

.sidebar__ic {
  width: 56px;
}

.sidebar__info {
  padding: 20px 17px;
  font-size: 12px;
  line-height: 1.6;
  font-weight: 500;
  border-top: 1px solid #172c43;
  margin-top: 10px;
}

.sidebar__list {
  position: relative;
}

.sidebar__list.open > .sidebar__item .mdi-chevron-down::before {
  -webkit-transform: rotate(-180deg);
  transform: rotate(-180deg);
}

.sidebar__list.open > .sidebar__item .sidebar__dropdown {
  -webkit-transform: rotate(-180deg);
  transform: rotate(-180deg);
}

.sidebar__list.active .mdi:not(.mdi-chevron-down) {
  color: #3f3bec;
}

.sidebar__list.active:after {
  /* background: #3F3BEC; */
  width: 2px;
  height: 46px;
  position: absolute;
  right: 0;
  top: 0;
  content: "";
}

.sidebar__list:before {
  background: #afb3bc;
  width: 6px;
  border-radius: 3px;
  height: 6px;
  position: absolute;
  left: 17px;
  top: 0;
  margin: auto;
  bottom: 0;
  z-index: 1;
  content: "";
}
.sidebar__list.active:before {
  background: #3f3bec;
  box-shadow: 0 0 10px rgba(63, 59, 236, 0.7);
}

@media (max-width: 1200px) {
  .sidebar__list.active:after {
    height: 46px;
  }
}

.sidebar__list.active > .sidebar__item > .text {
  color: #242841;
  /* padding-left: 36px; */
  /* padding-right: 10px; */
  font-size: 14px;
}

.sidebar__title {
  font-size: 12px;
  font-weight: 600;
  /* text-transform: uppercase; */
  padding: 30px 17px 10px 17px;
  margin-top: 0;
  color: inherit;
}

.sidebar__head {
  height: 56px;
  border-bottom: 1px solid #e0e4eb;
}

.sidebar__head__ic {
  text-align: center;
  height: 100%;
  position: relative;
}

.sidebar__head__ic label {
  cursor: pointer;
  width: 40px;
  height: 40px;
  line-height: 40px;
  margin: auto;
  overflow: visible;
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
}

.sidebar table {
  height: 100%;
}

.sidebar__section {
  border-top: 1px solid #172c43;
  padding: 10px 0;
}

.sidebar__item {
  height: 30px;
  color: #242841;
  cursor: pointer;
  text-decoration: none !important;
  background-color: transparent;
  position: relative;
  padding-left: 36px;
  padding-right: 10px;
}

@media (max-width: 1200px) {
  .sidebar__item {
    height: 45px;
  }
}

.sidebar__item.active .text {
  color: white;
}

.sidebar__item:not([data-control]) {
  -webkit-tap-highlight-color: rgba(223, 228, 235, 0.1);
}

.sidebar__item:hover,
.sidebar__item:focus,
.sidebar__item:active {
  color: #242841;
}

@media (min-width: 1025px) {
  .sidebar__item:hover,
  .sidebar__item:focus,
  .sidebar__item:active {
    background-color: #f7f8fa;
  }
}

.sidebar__item .ic:first-child {
  width: 17px;
  text-align: center;
}

.sidebar__item .ic:last-child {
  text-align: right;
  width: 40px;
  padding-right: 12px;
}

.sidebar__sub {
  background-color: #121f3e;
}

.sidebar__sub__wrap {
  padding-top: 10px;
  padding-bottom: 10px;
}

.sidebar__sub__wrap .ic:first-child {
  width: 18px;
}

.sidebar__sub__wrap > .sidebar__list > [data-content] {
  padding-left: 10px;
}

.sidebar__sub .sidebar__item {
  opacity: 0;
  height: 40px;
  padding: 10px 0;
  -webkit-transform: translate(0, -30%);
  transform: translate(0, -30%);
  -webkit-transition: 0.3s opacity ease-in-out, 0.3s transform ease-in-out;
  -webkit-transition: 0.3s opacity ease-in-out, 0.3s -webkit-transform ease-in-out;
  transition: 0.3s opacity ease-in-out, 0.3s -webkit-transform ease-in-out;
  transition: 0.3s opacity ease-in-out, 0.3s transform ease-in-out;
  transition: 0.3s opacity ease-in-out, 0.3s transform ease-in-out, 0.3s -webkit-transform ease-in-out;
}

@media (max-width: 1200px) {
  .sidebar__sub .sidebar__item {
    height: 40px;
  }
}

[data-accordion].open .sidebar__item {
  -webkit-transform: translate(0, 0);
  transform: translate(0, 0);
  opacity: 1;
}

[data-accordion].open > .sidebar__item {
  background-color: inherit;
}

.sidebar__list .notify {
  top: 5%;
  right: 10%;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.sidebar .legitRipple-ripple {
  background: #f2f1f7;
}

@media (max-width: 1200px) {
  .sidebar {
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100%, 0);
  }
  .sidebar:not(.sidebarswipe) {
    -webkit-transition: 0.2s all ease-in-out;
    transition: 0.2s all ease-in-out;
    -webkit-transition-delay: 0.15s;
    transition-delay: 0.15s;
  }
}

@media (max-width: 1200px) {
  #sidebar-trigger:checked ~ .sidebar {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}

@media (min-width: 1201px) {
  #sidebar-trigger:checked ~ .sidebar {
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100%, 0);
  }
}

@media (min-width: 1201px) {
  #sidebar-trigger:checked ~ .main {
    margin-left: 20px;
  }
}

@media (max-width: 1200px) {
  .sidebar-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 101;
    background: white;
    pointer-events: none;
    opacity: 0;
    -webkit-transition: 0.2s opacity ease-in-out;
    transition: 0.2s opacity ease-in-out;
    -webkit-transition-delay: 0.15s;
    transition-delay: 0.15s;
  }
}

@media (max-width: 1200px) {
  #sidebar-trigger:checked ~ .sidebar-overlay {
    opacity: 0.2;
    pointer-events: all;
  }
}

/*end sidebar*/
</style>
