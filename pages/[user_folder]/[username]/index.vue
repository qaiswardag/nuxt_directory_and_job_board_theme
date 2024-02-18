<script setup>
import UniqueResource from '../../../../../../components/layouts/UniqueResource.vue';
import PageHeader from '../../../../../../components/headers/PageHeader.vue';
import MainLayout from '../../../../../../layouts/MainLayout.vue';
import GuestsLayout from '../../../../../../layouts/GuestsLayout.vue';
// import { vueFetch } from '../../../../../../composables/vueFetch';
import SmallUniversalSpinner from '../../../../../../components/loaders/SmallUniversalSpinner.vue';
import { extractTextContentHTML } from '../../../../../../helpers/extract-text-content-html';
import { parseISO, format } from 'date-fns';

const route = useRoute();
const userFolder = route.params.user_folder;
const username = route.params.username;

console.log(`userFolder:`, userFolder);
console.log(`username:`, username);
</script>
<template>Came here</template>
