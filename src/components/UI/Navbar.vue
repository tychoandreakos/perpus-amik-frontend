<template>
    <section id="navbar">
        <div class="logo">
            <img :src="require('../../assets/main-logo-green.svg')" />
            <div class="title">{{ title }}</div>
        </div>
        <div class="menu">
            <a href="#">
                Donate
            </a>
            <a href="#">
                Library Card
            </a>
            <a href="#">
                Account
            </a>
            <a href="#">
                Search
            </a>

        </div>
    </section>
</template>
<script>
export default {
    name: "Navbar",
    data() {
        return {
            title: 'Greenwich Library'
        }
    }
}
</script>
<style scoped>
 #navbar {
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 4rem;
    align-items: center;
    box-shadow: 0 2px 45px rgba(0,0,0, .5);
 } 

#navbar .logo {
    display: flex;
    align-items: center;
}

#navbar .logo img {
    max-width: 70px;
    max-height: 70px;
}

#navbar .logo .title {
    margin-left: .6rem;
    font-family: 'Nunito Sans', sans-serif !important;
    font-size: 1.4rem;
    letter-spacing: 1.5px;

}

#navbar .menu a {
    margin: 0 1rem;
    text-decoration: none;
    color: #4a4a4a;
    font-size: .92rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500
}

</style>

