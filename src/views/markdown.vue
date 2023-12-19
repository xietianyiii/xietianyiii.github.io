<template>
	<div class="container">
		
		<md-editor class="mgb20" v-model="text" @on-upload-img="onUploadImg" />
		<el-button type="primary">提交</el-button>
	</div>
</template>

<script setup lang="ts" name="md">
import { ref } from 'vue';
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

const text = ref('Hello Editor!');
const onUploadImg = (files: any) => {
	console.log(files);
};
</script>
