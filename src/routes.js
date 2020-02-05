import Home from './routes/home.svelte'
import Pacman from './routes/pacman/pacman.svelte'
import TowerDefense from './routes/towerdefense/towerdefense.svelte'

export default {
    '/': Home,
    '/pacman': Pacman,
    '/towerdefense': TowerDefense,
}