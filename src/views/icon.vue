<template>
	<div class="container">
		<br />
		<h2>图标</h2>
		<div class="search-box">
			<el-input class="search" size="large" v-model="keyword" clearable placeholder="请输入图标名称"></el-input>
		</div>
		<ul>
			<li class="icon-li" v-for="(item, index) in list" :key="index">
				<div class="icon-li-content">
					<i :class="`el-icon-lx-${item}`"></i>
					<span>{{ item }}</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts" name="icon">
import { computed, ref } from 'vue';

const iconList: Array<string> = [
	'attentionforbid',
	'attentionforbidfill',
	'attention',
	'attentionfill',
	'tag',
	'tagfill',
	'people',
	'peoplefill',
	'notice',
	'noticefill',
	'mobile',
	'mobilefill',
	'voice',
	'voicefill',
	'unlock',
	'lock',
	'home',
	'homefill',
	'delete',
	'deletefill',
	'notification',
	'notificationfill',
	'notificationforbidfill',
	'like',
	'likefill',
	'comment',
	'commentfill',
	'camera',
	'camerafill',
	'warn',
	'warnfill',
	'time',
	'timefill',
	'location',
	'locationfill',
	'favor',
	'favorfill',
	'skin',
	'skinfill',
	'news',
	'newsfill',
	'record',
	'recordfill',
	'emoji',
	'emojifill',
	'message',
	'messagefill',
	'goods',
	'goodsfill',
	'crown',
	'crownfill',
	'move',
	'add',
	'hot',
	'hotfill',
	'service',
	'servicefill',
	'present',
	'presentfill',
	'pic',
	'picfill',
	'rank',
	'rankfill',
	'male',
	'female',
	'down',
	'top',
	'recharge',
	'rechargefill',
	'forward',
	'forwardfill',
	'info',
	'infofill',
	'redpacket',
	'redpacket_fill',
	'roundadd',
	'roundaddfill',
	'friendadd',
	'friendaddfill',
	'cart',
	'cartfill',
	'more',
	'moreandroid',
	'back',
	'right',
	'shop',
	'shopfill',
	'question',
	'questionfill',
	'roundclose',
	'roundclosefill',
	'roundcheck',
	'roundcheckfill',
	'global',
	'mail',
	'punch',
	'exit',
	'upload',
	'read',
	'file',
	'link',
	'full',
	'group',
	'friend',
	'profile',
	'addressbook',
	'calendar',
	'text',
	'copy',
	'share',
	'wifi',
	'vipcard',
	'weibo',
	'remind',
	'refresh',
	'filter',
	'settings',
	'scan',
	'qrcode',
	'cascades',
	'apps',
	'sort',
	'searchlist',
	'search',
	'edit'
];
const keyword = ref('');
const list = computed(() => {
	return iconList.filter(item => {
		return item.indexOf(keyword.value) !== -1;
	});
});
</script>

<style scoped>
.example-p {
	height: 45px;
	display: flex;
	align-items: center;
}
.search-box {
	text-align: center;
	margin-top: 10px;
}
.search {
	width: 300px;
}
ul,
li {
	list-style: none;
}
.icon-li {
	display: inline-block;
	padding: 10px;
	width: 120px;
	height: 120px;
}
.icon-li-content {
	display: flex;
	height: 100%;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	cursor: pointer;
}
.icon-li-content i {
	font-size: 36px;
	color: #606266;
}
.icon-li-content span {
	margin-top: 10px;
	color: #787878;
}
</style>
