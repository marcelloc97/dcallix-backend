import { Router } from 'express';
import upcomingController from './controllers/upcomingController';

const router = Router();

router.get('/launches/next', upcomingController.index);
router.get('/launches/upcoming', upcomingController.list);

router.get('/launches/previous', upcomingController.list);
router.get('/launches/latest', upcomingController.list);

export default router;