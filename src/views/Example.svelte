<script lang="ts">
import { storage } from "@/store/storage";

let count = 0
let text = ''

storage.subscribe(value => {
    count = value.count || 0
    text = value.text || ''
})

const increment = () => {
    storage.update(p => ({
        ...p,
        count: p.count + 1
    }))
}
const setText = (e: Event & {
    currentTarget: EventTarget & HTMLTextAreaElement;
}) => {
    storage.update(p => ({
        ...p,
        text: e.currentTarget.value
    }))
}

const clear = () => {
    storage.set({})
}
    
</script>

    <div class="wrapper bg-slate-400 text-base p-4 text-black">
        <div class="bg-slate-100 p-2">
            { text }
            <br />
            here is a counter: { count }
            <br />
            <textarea class="w-full" value={text} on:input={setText}></textarea>
        </div>
        <!-- tailwind css-->
        <div class="flex items-center py-2">
            <button
                class="bg-white rounded w-fit active:opacity-50"
                type="button"
                on:click={clear}
            >
                clear
            </button>
            <button
                class="bg-white rounded w-fit active:opacity-50  ml-4"
                type="button"
                on:click={increment}
            >
                increment
            </button>
        </div>
    </div>
    
<style>
.wrapper {
    display: flex;
    flex-direction: column;
}
</style>
