import Home from './routes/home.svelte'
import Pacman from './routes/pacman/pacman.svelte'
import TowerDefense from './routes/td/td.svelte'

export default {
    '/': Home,
    '/pacman': Pacman,
    '/towerdefense': TowerDefense,
}