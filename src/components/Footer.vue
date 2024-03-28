<template>
    <footer class="footer mt-5 mb-0 bg-foot-univers py-3">
        <div class="container">
            <div class="row">
                <div class="col align-middle text-center">
                    <span class="text-light">Copyright <b>MikeuVue. </b> {{ currentYear }}</span>
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