<script lang="ts" setup>
import {onMounted, ref} from 'vue'

const editContent = ref('please editor you content here')

const onInput = (evt: any) => {
  editContent.value = evt.target.innerText
}

onMounted(() =>{

})
</script>

<template>
  <div class="w-1/2 border-r-2 overflow-y-scroll overflow-x-hidden h-[calc(100vh-5rem)]">
    <p
        class="w-full min-h-full p-4 outline-0"
        contenteditable="true"
        @input="onInput"
    >
      {{editContent}}
    </p>
  </div>
</template>