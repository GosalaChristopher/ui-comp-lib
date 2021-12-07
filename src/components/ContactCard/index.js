import { useEffect, useState } from "react";

const ContactCard = ({ config, variant }) => {
  const [containerClass, setContainerClass] = useState('');
  const [avatarClass, setAvatarClass] = useState('');
  const [contentClass, setContentClass] = useState('');
  const [descriptionClass, setDescriptionClass] = useState('');
  const [nameClass, setNameClass] = useState('');
  const [titleClass, setTitleClass] = useState('');

  useEffect(() => {
    switch(variant) {
      case 'default' : {
        setContainerClass('bg-gray-100 rounded-xl p-8');
        setAvatarClass('w-32 h-32 rounded-full mx-auto');
        setContentClass('pt-6 space-y-4');
        setDescriptionClass('text-lg font-semibold');
        setNameClass('text-blue-600');
        setTitleClass('text-blue-300');
        break;
      }
      case 'business': {
        setContainerClass('md:flex bg-gray-100 rounded-xl p-8 md:p-0');
        setAvatarClass('w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto');
        setContentClass('pt-6 md:p-8 text-center md:text-left space-y-4');
        setDescriptionClass('text-lg font-semibold');
        setNameClass('text-blue-600');
        setTitleClass('text-blue-300');
        break;
      }
      default: {
        setContainerClass('md:flex bg-gray-100 rounded-xl p-4');
        setAvatarClass('w-32 h-30 rounded-full mx item-center');
        setContentClass('pt-1 space-y-4 pl-4');
        setDescriptionClass('');
        setNameClass('text-lg');
        setTitleClass('text-gray-400');
      }
    }
  }, [variant]);

  return (
    <figure className={containerClass}>
      <img className={avatarClass} src={config?.src || "/avatar.jpg"} alt="" width="384" height="512" />
      <div className={contentClass}>
        <blockquote>
          <p className={descriptionClass}>{config?.description}</p>
        </blockquote>
        <figcaption className="font-medium">
          <div className={nameClass}>{config?.name}</div>
          <div className={titleClass}>{config?.title}</div>
        </figcaption>
      </div>
    </figure>
  )
};

export default ContactCard;


