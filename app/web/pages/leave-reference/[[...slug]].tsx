import { appGetLayout } from "components/AppRoute";
import NotFoundPage from "features/NotFoundPage";
import LeaveReferencePageComponent from "features/profile/view/leaveReference/LeaveReferencePage";
import { useRouter } from "next/router";
import { referenceTypeRouteStrings } from "routes";

export default function LeaveReferencePage() {
  const router = useRouter();

  // leave-reference/:type/:userId/:hostRequestId?
  const slug = router.query.slug;
  if (!slug?.[0] || slug?.[1]) return <NotFoundPage />;
  const referenceType = slug[0];
  const parsedReferenceType = referenceTypeRouteStrings.find(
    (valid) => referenceType === valid
  );
  if (!parsedReferenceType) return <NotFoundPage />;
  const parsedUserId = Number.parseInt(slug[1]);
  if (isNaN(parsedUserId)) return <NotFoundPage />;
  const parsedHostRequestId = slug?.[2] ? Number.parseInt(slug[2]) : undefined;

  return (
    <LeaveReferencePageComponent
      referenceType={parsedReferenceType}
      userId={parsedUserId}
      hostRequestId={parsedHostRequestId}
    />
  );
}

LeaveReferencePage.getLayout = appGetLayout();
