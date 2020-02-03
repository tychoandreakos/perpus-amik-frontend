<template>
<section id="hero">
<div class="panel">
    <h1>Take Your Child to </h1>
    <h1>the Library Day! </h1>
    <p>{{ info }}</p>
    <button class="btn btn-attend">{{ buttonTitle }}</button>
</div>
</section>
</template>
<script>
    export default {
        name: 'Hero',
        data() {
            return {
                title: "Take Your Child to the Library Day!",
                info: "On February 1, drop in to the Library, sign up for your very first Greenwich Library card, create a Lunar New Year craft, and pick up a free copy of Dr. Seuss’s Gerald McBoing Boing in the Children’s Room!",
                buttonTitle: "Attend a Program"
            }
        }
    }
</script>
<style scoped>
#hero {
 background: url('https://wallpapersmug.com/download/2560x1024/d00534/facade-building-architecture.jpg') center no-repeat;
 background-attachment: fixed;
  background-size: cover;
 width: 100%;
 height: 75vh;
}

#hero .panel {
    background: rgba(255,255,255, .92);
    width: 55%;
    padding: 4rem;
    height: 55%;
    position: relative;
}

#hero .panel h1 {
    font-family: 'Cambay', sans-serif;
    font-size: 3.5em;
    font-weight: 400;
    width: 90%;
    border-bottom: 2px solid #eb9532;
    display: inline;
    color: #494949;
    margin: 0 !important;
    letter-spacing: 2px;
}

#hero .panel p {
    margin-top: 1.6rem;
    font-family: 'Poppins', sans-serif;
    letter-spacing: 2px;
    font-size: 1rem
}

#hero .panel .btn.btn-attend {
    position: absolute;
    right: 0;
    bottom: 0;
    border: none;
    background: #f2ba7a;
    color: #fff;
    font-family: 'Nunito Sans', sans-serif;
    font-size: .97rem;
    padding: .6rem 2.5rem;
    border-radius: 2px 0 0 0 ;
    letter-spacing: 1.1px;
}
</style>
