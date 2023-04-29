import { writable } from 'svelte/store';

export const storage = writable<Record<string, any>>({count: 0, text: ''})