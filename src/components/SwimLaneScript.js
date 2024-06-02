import image1 from '@/assets/image1.jpg';
import image2 from '@/assets/image2.jpg';
import image3 from '@/assets/image3.png';
import image4 from '@/assets/image4.png';
import image5 from '@/assets/image5.png';
import image6 from '@/assets/image6.jpg';
import image7 from '@/assets/image7.png';
import image8 from '@/assets/image8.png';
import image9 from '@/assets/image9.png';
import image10 from '@/assets/image10.png';
import image11 from '@/assets/image11.png';
import image12 from '@/assets/image12.jpg';
export default {
  data() {
    return {
      currentImageSet: 0,
      allImages: [
        [image1, image2, image3, image4, image5, image6],
        [image7, image8, image9, image10, image11, image12],
      ],
      allImageTexts: [
        [
          "Oppen heimer",
          "Past Lives",
          "Polite Society",
          "Robots",
          "Sanctuary",
          "Talk To Me",
        ],
        [
          "About My Father",
          "Air",
          "Are You There God? It ’ s Me, Margaret.",
          "Guardians of the Galaxy: Volume 3",
          "Big George Foreman",
          "Beau Is Afraid",
        ],
      ],
      images: [],
      imageTexts: [],
      isArrowLeft: false,
      isTransitioning: false,
    };
  },
  methods: {
    getImageStyle(index) {
      return this.isTransitioning ? { transitionDelay: index * 0.3 + "s" } : {};
    },
    nextImages(event) {
      this.isTransitioning = true;
      this.currentImageSet++;
      this.images =
        this.allImages[this.currentImageSet % this.allImages.length];
      this.imageTexts =
        this.allImageTexts[this.currentImageSet % this.allImageTexts.length];
      this.isArrowLeft = !this.isArrowLeft;
      setTimeout(() => {
        this.isTransitioning = false;
      }, 1000);
      if (event && event.target) {
        event.target.blur();
      }
    },
    showNewLabel(index) {
      return this.currentImageSet % 2 !== 0 && (index === 0 || index === 2);
    },
    
    dragStart(event, image) {
      event.dataTransfer.setData("text/plain", image);
      event.dataTransfer.setDragImage(event.target, 0, 0);
    },
    drag(event) {
      event.preventDefault();
    },
  },
  created() {
    this.images = this.allImages[this.currentImageSet];
    this.imageTexts = this.allImageTexts[this.currentImageSet];
  },
};
