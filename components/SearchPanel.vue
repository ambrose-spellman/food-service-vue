<template>
    <div class="d-lg-flex justify-content-md-between search_panel">
        <h2 class="section_title col-md-6 px-0">Меню</h2>
         <b-form-input :placeholder="placeholder" class="col-md-4 col-lg-3 input_search" :type="type"></b-form-input>
    </div>
</template>
<script>
export default {
    name: "SearchPanel",
    data() {
        return {
            type: 'search',
            placeholder: "Поиск в меню"
        }
    }
}

</script>
<style lang="scss" scoped>
.search_panel {
    margin-bottom: 20px;
    .input_search {
        border-radius: 10px;
        background: #F6F6F6 url('../static/fi_search.svg') left 10px center no-repeat;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        font-feature-settings: 'pnum' on, 'lnum' on;
        color: #2b2a2980;
        padding: 10px 10px 10px 44px;
        border: none;
    }
}
</style>