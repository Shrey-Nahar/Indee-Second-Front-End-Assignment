<template>
  <!-- Main section container -->
  <section>
    <!-- Header container with styling classes -->
    <div
      class="mt-4 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4 text-white"
    >
      <!-- Header text -->
      <h1 class="text-4xl font-extrabold leading-none tracking-wider text-left">
        Most-watched films
      </h1>
    </div>
    <!-- Carousel container -->
    <transition-group
      :key="currentImageSet"
      name="carousel"
      tag="div"
      class="flex justify-around relative"
      role="list"
    >
      <!-- Loop through each image in the images array -->
      <div
        v-for="(image, index) in images"
        :key="image"
        class="image-container relative"
        :style="getImageStyle(index)"
        role="listitem"
        tabindex="0"
        draggable="true"
          @dragstart="dragStart($event, image)"
          @drag="drag($event)"
      >
        <!-- Image element with the current image in the loop -->
        <img
          :src="image"
          class="custom-image"
          :alt="imageTexts[index]"
          role="img"
          aria-label="Image of a film"
          
        />

        <!-- Conditionally rendered "NEW" label -->
        <div class="box-container" v-if="showNewLabel(index)">
          <div class="small-box">NEW</div>
        </div>

        <!-- Image text with conditional class -->
        <p
          :class="{
            'image-text': true,
            'small-text': currentImageSet % 2 !== 0,
          }"
        >
          {{ imageTexts[index] }}
        </p>
      </div>
    </transition-group>

    <!-- Navigation control -->
    <div
      :class="['svg-container', { 'left-side': isArrowLeft }]"
      aria-label="Navigate images"
    >
      <!-- SVG for navigation control -->
      <svg
        width="150"
        height="510"
        viewBox="0 0 181 692"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="150" height="692" fill="url(#paint0_linear_3003_21)" />
        <path
          d="M72.375 384.574L110.625 346.003L72.375 307.431"
          stroke="white"
          stroke-width="8"
          stroke-linecap="round"
          stroke-linejoin="round"
          @click="nextImages"
          cursor="pointer"
          aria-label="Next images"
          role="button"
          tabindex="0"
          @keyup.enter="nextImages"
        />
        <defs>
          <linearGradient
            id="paint0_linear_3003_21"
            x1="0"
            y1="0"
            x2="0"
            y2="100%"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="3.35%" stop-color="#060606" />
            <stop offset="96.15%" stop-color="rgba(6, 6, 6, 0.7)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </section>
</template>
