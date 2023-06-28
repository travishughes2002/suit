import { useRouter } from 'vue-router';

export default function(emits, href, isAnchor) {
    const router = useRouter();

    function toggle() {
        if(isAnchor) {
            return router.push({ path: href });
        }

        return emits('onClick');
    }

    return { toggle }
}