<template>
    <div class="flex flex-col items-center bg-[#090909]">
        <h1 class="text-6xl font-bold pt-10 lg:pt-16 text-white">Appointment Booking</h1>
        <div id="calendly-embed" style="min-width:700px;height:1200px;" class="bg-black mt-20"></div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    let widget = document.getElementById("calendlyInlineWidget")
    let script = document.getElementById("widgetScript")

    if (widget && script && !widget.children.length) {
        script.remove()
        var newScript = document.createElement("script");
        newScript.id = "widgetScript";
        newScript.type = "text/javascript";
        newScript.src = "https://assets.calendly.com/assets/external/widget.js";
        newScript.async = true;
        document.head.appendChild(newScript);
    }

    Calendly.initInlineWidget({
        url: 'https://calendly.com/jenslaufer/toolfunnelcall',
        parentElement: document.getElementById('calendly-embed')
    });
});
</script>