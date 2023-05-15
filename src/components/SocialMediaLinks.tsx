import React, {ReactNode, useContext} from 'react';
import {AppContext} from '../context/AppContext';
import {BsFacebook, BsGithub, BsLinkedin} from 'react-icons/bs';

interface SocialMediaLink {
    href: string;
    icon: ReactNode;
}

const SocialMediaLinks: React.FC = () => {
    const {state} = useContext(AppContext);

    const socialMediaLinks: SocialMediaLink[] = [
        {
            href: 'https://www.linkedin.com/',
            icon: <BsLinkedin color='var(--red)' size='18' />
        },
        {
            href: 'https://www.github.com/',
            icon: <BsGithub color='var(--red)' size='18' />
        },
        {
            href: 'https://www.facebook.com/',
            icon: <BsFacebook color='var(--red)' size='18' />
        }
    ];

   return state.showSocialMediaLinks ? (
                                      <div className='footer'>
                                          {socialMediaLinks.map((link, index) =>
                                              <a href={link.href}
                                                 key={index}
                                                 target='_blank'
                                                 className='mr-2 md:mr-0 mb-3'
                                                 data-testid={link.href}>
                                                  {link.icon}
                                              </a>
                                          )}
                                      </div>
                                    )
                                   : null
};

export default SocialMediaLinks;
