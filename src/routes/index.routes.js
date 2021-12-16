import { Router} from 'express';

const router = Router()

router.get("/", (req, res) => {
    res.send("wold ");
});

router.get("/about", (req, res) => {
    res.send("about us ");
});




export default router