import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ExperienceContainer.css'

const ExperienceContainer = ({ experience }) => (
  <div className='experience'>
    <h3>{experience.name}</h3>

    <p className='experience__description'>{experience.description}</p>
    {experience.subdescription && (
      <ul className='experience__subdescription'>
        {experience.subdescription.map((item) => (
          <li key={uniqid()} className='experience__subdescription-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {experience.sourceCode && (
      <a
        href={experience.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {experience.livePreview && (
      <a
        href={experience.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
  </div>
)

export default ExperienceContainer
