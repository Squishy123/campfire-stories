import Home from './routes/home.svelte'
import Pacman from './routes/pacman/pacman.svelte'
import TowerDefence from './routes/towerdefense/towerdefence.svelte'

export default {
    '/': Home,
    '/pacman': Pacman,
    '/towerdefense': TowerDefence,
}