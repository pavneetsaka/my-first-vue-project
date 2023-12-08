<script>
    import flash from '@/mixins/flash';

    export default{
        mixins: [flash]
    }
</script>

<template>
    <button type="button" @click="flash('Mixins Alert!')"> clickMe !</button>
</template>