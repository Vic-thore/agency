import { Seo } from '../../components/Seo';
import { ServiceDetailPage } from '../../components/ServiceDetailPage';
import { serviceGroups } from '../../data/services';

const group = serviceGroups.find((g) => g.slug === 'workflow-automation')!;

export default function WorkflowAutomation() {
  return (
    <>
      <Seo
        title="Workflow Automation Services (n8n) | Metron Studio"
        description="n8n-powered automation connecting your website, CRM, and internal tools — lead routing, CRM sync, and workflow automation. Coming soon."
      />
      <ServiceDetailPage group={group} />
    </>
  );
}
