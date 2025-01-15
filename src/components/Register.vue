<template>
    <div class="RegisterEmameun">
        <b-container class="h-custom">
            <b-row class="d-flex justify-content-between align-items-center h-100 py-3">
                <b-col md="9" lg="6" xl="5">
                    <b-img src="asset/images/register.png" fluid alt="Sample image"></b-img>
                </b-col>
                <b-col md="8" lg="6" xl="4" offset-xl="1">
                    <b-form @submit.prevent="registerForm">
                        <div
                            class="d-flex flex-column align-items-center justify-content-center justify-content-lg-start mb-2">
                            <h4 class="mb-0 text-center"><strong>Reg</strong>ister </h4>
                            <div class="color-univers mt-0 d-flex justify-content-center align-items-center medium">
                                <span class="small">creating <strong>account</strong></span>
                            </div>
                        </div>
                        <b-form-group label="First Name" label-for="first_name">
                            <b-form-input id="first_name" type="text" placeholder="Enter a valid first name"
                                v-model="first_name"></b-form-input>
                        </b-form-group>
                        <b-form-group label="Last Name" label-for="last_name">
                            <b-form-input id="last_name" type="text" placeholder="Enter a valid last name"
                                v-model="last_name"></b-form-input>
                        </b-form-group>
                        <b-form-group label="Email address" label-for="email">
                            <b-form-input id="email" type="email" placeholder="Enter a valid email address"
                                v-model="email"></b-form-input>
                        </b-form-group>
                        <b-form-group label="Password" label-for="password">
                            <b-form-input id="password" type="password" placeholder="Enter password"
                                v-model="password"></b-form-input>
                        </b-form-group>
                        <b-form-group label="Confirm Password" label-for="confirm_password">
                            <b-form-input id="confirm_password" type="password"
                                placeholder="Enter confirm password" v-model="confirm_password"></b-form-input>
                        </b-form-group>
                        <div class="text-center text-lg-start mt-4 pt-2">
                            <b-button type="submit" class="btn-lg btn-second"
                                style="padding-left: 2.5rem; padding-right: 2.5rem;">Submit</b-button>
                        </div>
                    </b-form>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: "RegisterEmameun",
    data() {
        return {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            confirm_password: '',
        };
    },
    methods: {
        registerForm(){
            const data = {
                first_name: this.first_name,
                last_name: this.last_name,
                email: this.email,
                password: this.password,
                confirm_password: this.confirm_password,
            };

            axios.push('register/', data)
            .then(
                res => console.log(res)
            )
                .catch((error) => console.log(error))

        }
    }
}
</script>
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