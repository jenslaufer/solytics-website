<template>
    <div class="flex flex-col items-center bg-[#090909]">
        <h1
            class="font-bold text-center pt-10 lg:pt-16 pb-6 text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-white">
            Appointment Booking</h1>
        <div id="calendly-embed" class="w-5/6 h-full bg-black"></div>
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