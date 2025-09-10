import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Image imports
import previousWhiteWithToys from '@assets/previous-puppies/white-lab-with-toys.jpg';
import newBlackOnRocks from '@assets/previous-puppies/black-lab-on-rocks-with-toy.jpg';
import newYellowSitting from '@assets/previous-puppies/yellow-lab-sitting-in-grass.jpg';
import previousChocolateStanding from '@assets/previous-puppies/chocolate-lab-standing.jpg';
import previousFoxRedPuppy from '@assets/previous-puppies/fox-red-lab-with-toy.jpg';
import newGoldenWithToys from '@assets/previous-puppies/golden-lab-with-toys.jpg';
import previousChocolateToys from '@assets/previous-puppies/chocolate-lab-with-toys.jpg';
import newBlackWithBanana from '@assets/previous-puppies/black-lab-with-banana-toy.jpg';
import newWhiteStanding from '@assets/previous-puppies/white-lab-standing.jpg';
import newYellowWithToys from '@assets/previous-puppies/yellow-lab-with-toys.jpg';
import previousYellowRope from '@assets/previous-puppies/yellow-lab-with-rope.jpg';
import newSaddleMarked from '@assets/previous-puppies/saddle-marked-lab-with-toys.jpg';
import previousChocolateRainbow from '@assets/previous-puppies/chocolate-lab-with-rainbow-toy.jpg';
import previousBlackToy from '@assets/previous-puppies/black-lab-with-toy.jpg';
import previousWhitePuppy from '@assets/previous-puppies/white-lab-puppy.jpg';

// import topoGigioImage from '@assets/topo-gigio-westminster.jpg';
// import matureDogsImage from '@assets/duke-atlas-outdoor.jpg';

export default function Puppies() {
  const [selectedImage, setSelectedImage] = useState<{src: string, name: string} | null>(null);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedLitter, setSelectedLitter] = useState<any>(null);
  const [isPedigreePopupOpen, setIsPedigreePopupOpen] = useState(false);
  const [isTopoPopupOpen, setIsTopoPopupOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState<{abbreviation: string, fullName: string} | null>(null);
  const [isTitlePopupOpen, setIsTitlePopupOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<{[key: string]: number}>({});

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const calculateAge = (birthDate: string) => {
    if (birthDate.includes('Due')) return 'Expected Soon';
    
    const birth = new Date(birthDate);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - birth.getTime());
    const diffWeeks = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7));
    
    if (diffWeeks < 4) {
      return `${diffWeeks} weeks old`;
    } else if (diffWeeks < 8) {
      return `${diffWeeks} weeks old`;
    } else {
      const diffMonths = Math.floor(diffWeeks / 4.33);
      return `${diffMonths} months old`;
    }
  };

  const getLitterStatus = (birthDate: string, status?: string) => {
    if (status) return status;
    
    if (birthDate.includes('Due')) return 'Expected';
    
    const birth = new Date(birthDate);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - birth.getTime());
    const diffWeeks = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7));
    
    if (diffWeeks >= 8) return 'Ready';
    if (diffWeeks >= 6) return 'Ready Soon';
    return 'Growing';
  };

  const upcomingLitters = [
    {
      name: "Moon & Oso",
      birthDate: "Due July 2025",
      image: "placeholder.jpg",
      status: "Expected"
    }
  ];

  const currentLitters = [
    {
      name: "Moon & Grizzly", 
      birthDate: "April 15, 2024",
      image: "placeholder.jpg",
      status: "Available"
    }
  ];

  return (
    <div>
      <h1>Puppies Page</h1>
      <p>Testing minimal structure - debugging JSX issues</p>
    </div>
  );
}