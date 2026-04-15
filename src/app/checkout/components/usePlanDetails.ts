import { useSearchParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { PLANS, PlanData } from "@/lib/plans"

const usePlanDetails = ({ noLinkRedirection, enableToast, noLoginRedir }: { noLinkRedirection?: boolean, enableToast?: boolean, noLoginRedir?: boolean} = {}) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const planParam = searchParams.get('plan')
  const [planObj, setPlanObj] = useState<PlanData | null>(null)

  useEffect(() => {
    if (!planParam) {
      if (enableToast) toast.error('No plan selected')
      if (!noLinkRedirection) router.push('/broken-link')
      return
    }

    const planKey = planParam.toLowerCase() as keyof typeof PLANS;
    if (PLANS[planKey]) {
      setPlanObj(PLANS[planKey]);
      if(!noLoginRedir) router.push('/login?plan=' + planParam)
    } else {
      if (enableToast) toast.error('Invalid plan selected')
      if (!noLinkRedirection) router.push('/broken-link')
    }
  }, [planParam, router, enableToast, noLinkRedirection, noLoginRedir])

  return { planObj, planParam }
}

export default usePlanDetails
