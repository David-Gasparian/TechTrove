import { buildOptions } from "./config"
import {Configuration as DevServerConfiguration} from 'webpack-dev-server';

export const buildDevServer = ({ port }: buildOptions): DevServerConfiguration  => {
    return {
        port,
        open: true
    }
}