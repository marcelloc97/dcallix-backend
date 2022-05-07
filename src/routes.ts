import { Router } from 'express';
import { upcomingController, previousController } from './controllers';

const router = Router();

router.get('/launches/next', upcomingController.index);
router.get('/launches/upcoming', upcomingController.list);

router.get('/launches/previous', previousController.index);
router.get('/launches/latest', previousController.list);

export default router;