<template>
    <div class="LoginEmameun">
        <b-container class="h-custom">
            <b-row class="d-flex justify-content-between align-items-center h-100">
                <b-col md="9" lg="6" xl="5">
                    <b-img style="width:600px;" src="asset/images/login.png" fluid alt="Sample image"></b-img>
                </b-col>
                <b-col md="8" lg="6" xl="4" offset-xl="1">
                    <b-form @submit.prevent="onSubmit">
                        <div
                            class="d-flex flex-column align-items-center justify-content-center justify-content-lg-start">
                            <h4 class="mb-0 text-center"><strong>Sign</strong> in with</h4>
                            <div class="color-univers mt-3 d-flex justify-content-center align-items-center medium">
                                <b-icon-instagram class="mb-2 "></b-icon-instagram>
                                <b-icon-facebook class="mb-2 mx-2"></b-icon-facebook>
                                <b-icon-twitter class="mb-2"></b-icon-twitter>
                            </div>
                        </div>
                        <div class="divider d-flex align-items-center my-3">
                            <p class="text-center fw-bold mx-3 mb-0">Or</p>
                        </div>
                        <b-form-group label="Email address" label-for="email">
                            <b-form-input id="email" type="email" placeholder="Enter a valid email address"
                                v-model="email"></b-form-input>
                        </b-form-group>
                        <b-form-group label="Password" label-for="password">
                            <b-form-input id="password" type="password" placeholder="Enter password"
                                v-model="password"></b-form-input>
                        </b-form-group>
                        <div class="d-flex justify-content-between align-items-center">
                            <b-form-checkbox v-model="rememberMe" class="mb-0">Remember me</b-form-checkbox>
                            <b-link href="#" class="text-body">Forgot password?</b-link>
                        </div>
                        <div class="text-center text-lg-start mt-4 pt-2">
                            <b-button type="submit" class="btn-lg btn-second"
                                style="padding-left: 2.5rem; padding-right: 2.5rem;">Login</b-button>
                            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <router-link to="/register"
                                    class="link-danger color-univers">Register</router-link></p>
                        </div>
                    </b-form>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<style scoped>
.divider:after,
.divider:before {
    content: "";
    flex: 1;
    height: 1px;
    background: #eee;
}

.h-custom {
    height: calc(98vh - 82px);
}

@media (max-width: 450px) {
    .h-custom {
        height: 100%;
    }
}
</style>
<script>
export default {
    name: 'LoginEmameun',
    data() {
        return {
            email: '',
            password: '',
            rememberMe: false
        };
    },
    methods: {
        onSubmit() {
            // Implement login logic here
            console.log('Form submitted');
        }
    }
}
</script>