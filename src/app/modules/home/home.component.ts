import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule, NavbarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  protected data = [
    {
      title: 'Revamp your home in style',
      items: [
        {
          name: 'Cushion covers, bedsheets & more',
          img: 'assets/images/translation.png',
        },
        {
          name: 'Figurines, vases & more',
          img: 'assets/images/dwarf-space-men.png',
        },
        {
          name: 'Home storage',
          img: 'assets/images/storg.png',
        },
        {
          name: 'Lighting solutions',
          img: 'assets/images/Lightingsolutions.png',
        },
      ],
      TextLink:'Explore all'
    },
    {
      title: 'Appliances for your home | Up to 55% off',
      items: [
        {
          name: 'Air Conditioners',
          img: 'assets/images/AirConditioners.png',
        },
        {
          name: 'Refrigerators',
          img: 'assets/images/Snow.png',
        },
        {
          name: 'Microwaves',
          img: 'assets/images/Microwabes.png',
        },
        {
          name: 'Washing machines',
          img: 'assets/images/Washingmachines.png',
        },
      ],
      TextLink:'See more'
    },
    {
      title: 'Starting $149 | Headphones',
      items: [
        {
          name: 'boAt ₹249',
          img: 'assets/images/boAt.png',
        },
        {
          name: 'Boult ₹349',
          img: 'assets/images/Boult.png',
        },
        {
          name: 'Noise ₹649',
          img: 'assets/images/noise.png',
        },
        {
          name: 'Zebronics ₹1199',
          img: 'assets/images/ZEBRONICS.png',
        },
      ],
      TextLink:'Sell all ofers'
    },
    {
      title: 'Starting $99 | Amazon Brands & more',
      items: [
        {
          name: 'Home storage ₹239',
          img: 'assets/images/Staringstorg.png',
        },
        {
          name: 'Storage Brands Up to 60% off',
          img: 'assets/images/Glassjarsstorg.png',
        },
        {
          name: 'Toys & games ₹99',
          img: 'assets/images/Staringames.png',
        },
        {
          name: 'Jackets, dresses & more Up to 60% off',
          img: 'assets/images/shoes.png',
        },
      ],
      TextLink:'Shop now'
    },
    {
      title: 'Automotive essentials| Up to 60% off',
      items: [
        {
          name: 'Cleaning accessories',
          img: 'assets/images/Cleaningaccessories.png',
        },
        {
          name: 'Tyre & rim care',
          img: 'assets/images/Tyre-rim-care.png',
        },
        {
          name: 'Helmets',
          img: 'assets/images/Helmets.png',
        },
        {
          name: 'Vacuum cleaner',
          img: 'assets/images/Vacuum-cleaner.png',
        },
      ],
      TextLink:'See more'
    },
    {
      title: 'Up to 60% off | Styles for women',
      items: [
        {
          name: 'Women’s Clothing',
          img: 'assets/images/Women’s-Clothing.png',
        },
        {
          name: 'Footwear+Handbags',
          img: 'assets/images/Footwear+Handbags.png',
        },
        {
          name: 'Watches',
          img: 'assets/images/Watches.png',
        },
        {
          name: 'Fashion jewellery',
          img: 'assets/images/Fashion-jewellery.png',
        },
      ],
      TextLink:'End of season sale'
    },
    {
      title: 'Starting ₹199 | Amazon Brands & more',
      items: [
        {
          name: 'Starting $199| Bedsheets',
          img: 'assets/images/Bedsheets.png',
        },
        {
          name: 'Starting $199| Curtains',
          img: 'assets/images/Curtains.png',
        },
        {
          name: 'Minimum 40% off | Ironing board & more',
          img: 'assets/images/Ironing-board.png',
        },
        {
          name: 'Up to 60% off | Home decor',
          img: 'assets/images/Home-decor.png',
        },
      ],
      TextLink:'See more'
    },
    {
      title: 'Starting ₹99 | Home improvement essentials',
      items: [
        {
          name: 'Spin mops, wipes & more',
          img: 'assets/images/Spinmops.png',
        },
        {
          name: 'Bathroom hardware & accessories',
          img: 'assets/images/Bathroom.png',
        },
        {
          name: 'Hammers, screwdrivers & more',
          img: 'assets/images/screwdrivers.png',
        },
        {
          name: 'Extension boards, plugs & more',
          img: 'assets/images/Extension-boards.png',
        },
      ],
      TextLink:'See more'
    },
  ];
  slidone = [
    'assets/images/Socks.png',
    'assets/images/reddress.png',
    'assets/images/dresscollection.png',
    'assets/images/pants.png',
    'assets/images/GreenT-shirt.png',
    'assets/images/Blue-T-shirt.png',
    'assets/images/blackjacket.png',
    'assets/images/Alayna.png',
    'assets/images/dreess.png',
    'assets/images/GreenDress.png',
    'assets/images/Socks.png',
    'assets/images/pants.png',
    'assets/images/Alayna.png',
    'assets/images/reddress.png',
    'assets/images/dresscollection.png',
    'assets/images/pants.png',
    'assets/images/GreenT-shirt.png',
    'assets/images/Blue-T-shirt.png',
    'assets/images/blackjacket.png',
    'assets/images/GreenDress.png',
  ];
  slidtwo = [
    'assets/images/mineral-water-bottle.png',
    'assets/images/Metal-carrier.png',
    'assets/images/Glassjars.png',
    'assets/images/Electrickettle.png',
    'assets/images/Make-A-dough.png',
    'assets/images/Foodbox.png',
    'assets/images/vintage-milk-bottle.png',
    'assets/images/kettel.png',
    'assets/images/vintage-milk.png',
    'assets/images/Kitchen-Appliances.png',
    'assets/images/LINKChef-Processor.png',
    'assets/images/hanging-metal.png',
    'assets/images/Space-Saving-Cookware.png',
    'assets/images/mineral-water-bottle.png',
    'assets/images/Metal-carrier.png',
    'assets/images/Glassjars.png',
    'assets/images/Electrickettle.png',
    'assets/images/Make-A-dough.png',
    'assets/images/Foodbox.png',
  ];
  // slider one
  currentIndex = 0;
  itemWidth = 160;
  totalImages = this.slidone.length;
  progressWidth = 0;

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateProgress();
    }
  }

  nextSlide() {
    if (this.currentIndex < this.totalImages - 1) {
      this.currentIndex++;
      this.updateProgress();
    }
  }

  updateProgress() {
    this.progressWidth = ((this.currentIndex + 1) / this.totalImages) * 100;
  }

  @HostListener('window:resize')
  onResize() {
    const item = document.querySelector('.carousel-items') as HTMLElement;
    if (item) {
      this.itemWidth = item.offsetWidth + 10;
    }
  }
  protected Data: any = [
    // =========={{0}}============
    {
      title: 'Best Sellers in Toys & Games',
      items: [
        {
          name: 'Storio Rechargeable Toys Talking Cactus Baby Toys for Kids Dancing Cactus Toys…',
          price: '319',
          img: 'assets/images/dancing-cactus.png',
        },
        {
          name: 'Storio Rechargeable Toys Talking Cactus Baby Toys for Kids Dancing Cactus Toys…',
          price: '280',
          img: 'assets/images/UNOplay.png',
        },
        {
          name: 'Storio Rechargeable Toys Talking Cactus Baby Toys for Kids Dancing Cactus Toys…',
          price: '450',
          img: 'assets/images/stroller.png',
        },
        {
          name: 'Storio Rechargeable Toys Talking Cactus Baby Toys for Kids Dancing Cactus Toys…',
          price: '150',
          img: 'assets/images/Smart-board.png',
        },
      ],
    },
    // ==========={{1}}============
    {
      title: 'Customers’ Most-Loved Products',
      items: [
        {
          img: 'assets/images/terracotta-wall.png',
        },
        {
          img: 'assets/images/Bells.png',
        },
        {
          img: 'assets/images/Spice-carrier.png',
        },
        {
          name: '',
          price: '',
          img: 'assets/images/Bajaj.png',
        },
      ],
    },
    // ============{{2}}===============
    {
      title: 'Best Sellers in Beauty',
      items: [
        {
          img: 'assets/images/skinDerma.png',
        },
        {
          img: 'assets/images/CetaphilCleanser.png',
        },
        {
          img: 'assets/images/powderDettol.png',
        },
        {
          name: '',
          price: '',
          img: 'assets/images/soapDettol.png',
        },
      ],
    },
    //==============={{3}}=================
    {
      title: 'Latest styles | Dresses, kurta & more | 50% -...',
      items: [
        {
          name: 'Kurta & sets',
          img: 'assets/images/Kurta&sets.png',
        },
        {
          name: 'Tops',
          img: 'assets/images/tops.png',
        },
        {
          name: 'Dresses',
          img: 'assets/images/Dresses.png',
        },
        {
          name: 'Sarees',
          price: '',
          img: 'assets/images/Sarees.png',
        },
      ],
    },
  ];
  x = this.Data[0].items[0];

  selectItem(item: any) {
    this.x = item;
  }



  // slider two 
  currentIndexs = 0;
  itemWidths = 160;
  TotalImages = this.slidtwo.length;
  progressWidths = 0;

  PrevSlide() {
    if (this.currentIndexs > 0) {
      this.currentIndexs--;
      this.UpdateProgress();
    }
  }

  NextSlide() {
    if (this.currentIndexs < this.TotalImages - 1) {
      this.currentIndexs++;
      this.UpdateProgress();
    }
  }

  UpdateProgress() {
    this.progressWidths = ((this.currentIndexs + 1) / this.TotalImages) * 100;
  }

  @HostListener('window:resize')
  OnResize() {
    const item = document.querySelector('.carousel-items') as HTMLElement;
    if (item) {
      this.itemWidth = item.offsetWidth + 10;
    }
  }
}
