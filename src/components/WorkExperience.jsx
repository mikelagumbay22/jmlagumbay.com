import { Title, Table, Image, Text } from "@mantine/core";
import Tesla from "../assets/Tesla.png";
import DigitalStorm from "../assets/DigitalStorm.jpg";
import Sykes from "../assets/Sykes.webp";

function WorkExperience() {
  return (
    <>
      <br />
      <Title size="2rem" mb="lg" bg="white" style={{ color: 'black' }}> Work Experience</Title>
      <div style={{ width: '1000px', margin: '0 auto' }}>
        <Table
          striped
          highlightOnHover
          verticalSpacing="md"
          style={{ borderCollapse: 'collapse' }}
        >
          <thead>
            <tr>
              <th>Company</th>
              <th>Role Description</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #dee2e6' }}>
              <td style={{ textAlign: 'left', padding: '10px' }}>
                <Image
                  radius="sm"
                  width={100}
                  fit="contain"
                  src={Tesla}
                  alt="Tesla"
                  bg="white"
                  />
              </td>
              <td style={{ textAlign: 'left', padding: '10px' }}>
                <Text>
                  At Tesla, I worked in various roles within the Process Engineering department from August 2020 to June 2023. As a Production Associate, I assembled advanced powertrains, performed quality inspections, and supported the production team. Transitioning to the role of Process Technician, I tackled manufacturing defects, created and refined standard procedures, and contributed to continuous improvement projects. As a Lead Process Technician, I managed team performance, conducted training, and developed automated dashboards to streamline operations. My final position as Supervisor of Process Engineering involved overseeing team performance, coordinating with cross-functional teams on defect trends, and driving Environmental Health and Safety (EHS) initiatives. I played a key role in implementing new processes, updating manufacturing instructions, and optimizing operational efficiency through various automation tools and process improvements.
                </Text>
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid #dee2e6' }}>
              <td style={{ textAlign: 'left', padding: '10px' }}>
                <Image
                  radius="sm"
                  width={80}
                  fit="contain"
                  src={DigitalStorm}
                  alt="Digital Storm"
                />
              </td>
              <td style={{ textAlign: 'left', padding: '10px' }}>
                <Text>
                  At Digital Storm PC, I excelled as a Quality Analyst, ensuring each PC build met the highest standards of performance and reliability. My role involved meticulously checking and updating BIOS settings, installing Microsoft Windows, and verifying that all components and drivers were correctly installed. I conducted thorough quality inspections to ensure every PC met customer specifications, including optimizing wire management and assessing the physical appearance. Additionally, I supported the packing team, ensuring that each PC was securely boxed and prepared for shipment.
                </Text>
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid #dee2e6' }}>
              <td style={{ textAlign: 'left', padding: '10px' }}>
                <Image
                  radius="sm"
                  width={100}
                  fit="contain"
                  src={Sykes}
                  alt="Sykes"
                />
              </td>
              <td style={{ textAlign: 'left', padding: '10px' }}>
                <Text>
                  During my 15-year tenure at SYKES in the National Capital Region, Philippines, I honed my skills across multiple roles. As a Process Engineer in Quality Management, I led training and audits to ensure adherence to company standards and prepared accounts for SOX and ISO certifications. I used Six Sigma methodologies for root cause analysis, driving improvements in operations and quality across SYKES&apos; Asia Pacific region. My role involved crafting innovative solutions with Microsoft Power tools, including Excel, SharePoint, PowerBi, and PowerApps. In my earlier positions, I contributed as an Assistant HR Manager by spearheading strategic initiatives and enhancing recruitment processes. As a Sr. Specialist and Technology Officer, I developed advanced Excel templates, conducted training, and improved quality systems. My journey began as a Quality Assurance Coordinator and Technical Support Representative, where I focused on customer service and transaction monitoring, building a strong foundation in communication and leadership skills.
                </Text>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default WorkExperience;
