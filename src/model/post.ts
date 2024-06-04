import { Profile } from "./profile";
import {Picture} from './picture';
import {Comment} from './comment';

export interface Post {
    id: string;
    name: string;
    desc: string;
    profile?: Profile;
    post: any;
    images: Picture[];
    comments: Comment[];
}

export interface Actu{
  createdAt: string,
desc: string
domaines: string,
enabled: string,
id: number
name: string,
roles: []
videoUrl: string,
imageLogo: string,
logo: string,
like: string,
images: [],
share: string,
comments: string
}
