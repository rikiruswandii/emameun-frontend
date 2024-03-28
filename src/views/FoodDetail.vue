<template>
    <div class="foods-detail h-detail-univers">
        <Navbar />
    <div class="container">
        <div class="row mt-5">
            <div class="col">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><router-link to="/" class="text-dark">Home</router-link></li>
                        <li class="breadcrumb-item"><router-link to="/foods" class="text-dark">Foods</router-link></li>
                        <li class="breadcrumb-item active" aria-current="page">Foods Order</li>
                    </ol>
                </nav>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-md-6">
                <img :src="'../asset/images/' + (product.gambar || '')" class="img-fluid shadow" alt="...">
            </div>
            <div class="col-md-6">
                <h2 class="mb-0"><strong>{{ product.nama }}</strong></h2>
                <hr class="mt-1"/>
                <h4>Harga : <strong>Rp.{{ product.harga }}</strong></h4>
                <form class="mt-4" v-on:submit.prevent>
                    <div class="form-group">
                        <label for="jumlah_pemesanan">Jumlah pesan</label>
                        <input type="number" class="form-control" v-model="pesan.jumlah_pemesanan"/>
                    </div>
                    <div class="form-group">
                        <label for="keterangan">Keterangan</label>
                        <textarea v-model="pesan.keterangan" class="form-control" placeholder="Keterangan spt: Pedas, Banyakin porsinya, mimin ganteng ..."></textarea>
                    </div>
                    <button type="submit" class="btn btn-success" @click="pemesanan"><b-icon-cart></b-icon-cart> Pesan</button>
                </form>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import axios from 'axios'
export default {
    name: 'foodDetail',
    components: {
        Navbar
    },
    data() {
        return {
            product: {},
            pesan: {
                jumlah_pemesanan: 0,
                keterangan: ""
            }
        };
    },
    methods: {
        setProduct(data) {
            this.product = data
        },
        pemesanan() {
            this.pesan.products = this.product;
            axios
                .post("http://localhost:3000/keranjangs", this.pesan)
                .then(() => {
                    console.log('Berhasil!')
                })
                .catch((error) => console.log(error))
        },
    },
    mounted() {
        axios
            .get('http://localhost:3000/products/'+this.$route.params.id)
            .then((response) => this.setProduct(response.data))
            .catch((error) => console.log(error))
    }
}
</script>
<style>
</style>