import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '@/layouts/RootLayout'
import HomePage from '@/pages/HomePage'
import CandidatePage from '@/pages/CandidatePage'
import CommitmentPage from '@/pages/CommitmentPage'
import Commitment1Page from '@/pages/commitment/Commitment1Page'
import Commitment2Page from '@/pages/commitment/Commitment2Page'
import Commitment3Page from '@/pages/commitment/Commitment3Page'
import Commitment4Page from '@/pages/commitment/Commitment4Page'
import Commitment5Page from '@/pages/commitment/Commitment5Page'
import WorksPage from '@/pages/WorksPage'
import GalleryPage from '@/pages/GalleryPage'
import NewsPage from '@/pages/NewsPage'
import ContactPage from '@/pages/ContactPage'
import ReachOutPage from '@/pages/ReachOutPage'
import NotFound from '@/pages/NotFound'
import GalleryPhotoPage from '@/pages/GalleryPhotoPage'
import GalleryVideoPage from '@/pages/GalleryVideoPage'
import NewsDetailPage from '@/pages/NewsDetailPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'candidate',
        element: <CandidatePage />,
      },
      {
        path: 'commitment',
        element: <CommitmentPage />,
      },
      {
        path: 'commitment/1',
        element: <Commitment1Page />,
      },
      {
        path: 'commitment/2',
        element: <Commitment2Page />,
      },
      {
        path: 'commitment/3',
        element: <Commitment3Page />,
      },
      {
        path: 'commitment/4',
        element: <Commitment4Page />,
      },
      {
        path: 'commitment/5',
        element: <Commitment5Page />,
      },
      {
        path: 'works',
        element: <WorksPage />,
      },
      {
        path: 'gallery',
        element: <GalleryPage />,
      },
      {
        path: 'gallery/photo',
        element: <GalleryPhotoPage />,
      },
      {
        path: 'gallery/video',
        element: <GalleryVideoPage />,
      },
      {
        path: 'news',
        element: <NewsPage />,
      },
      {
        path: 'news/:slug',
        element: <NewsDetailPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'reach-out-to-your-mp',
        element: <ReachOutPage />,
      },
    ],
  }
])