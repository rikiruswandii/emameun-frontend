<template>
    <footer class="footer mb-0 bg-foot-univers py-3">
        <div class="container">
            <div class="row">
                <div class="col">
                    <span class="text-light float-left">Copyright <b>MikeuVue. </b> {{ currentYear }}</span>
                    <div class="d-flex justify-content-between float-right">
                        <strong class="medium">Get connected with us on social networks!</strong>
                        <div class="px-1">
                            <b-icon-instagram class="ml-2"></b-icon-instagram>
                            <b-icon-facebook class="ml-2"></b-icon-facebook>
                            <b-icon-twitter class="ml-2"></b-icon-twitter>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'iniFooter',
    data() {
        return {
            currentYear: new Date().getFullYear()
        };
    }
}
</script>